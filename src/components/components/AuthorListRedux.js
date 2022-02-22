import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import UserTopSeller from './UserTopSeller';
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";

const AuthorList = () => {
    
    const dispatch = useDispatch();
    const authorsState = useSelector(selectors.authorsState);
    const authors = authorsState.data ? authorsState.data : [];

    const newAuthors = authors.sort((a,b) => a.id - b.id);

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [dispatch]);

    return (
        <div>
            <ul className="author_list">
            { newAuthors && newAuthors.map((author, index) => (




                <li style={{color: '#fff'}} key={index} className={author.id} id={author.username}>
                    <UserTopSeller user={author} />
                </li>
            ))}
            </ul>
        </div>
    );
};
export default memo(AuthorList);