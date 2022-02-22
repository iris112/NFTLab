import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settingsnew } from "./constants";
import CustomSlide from "./CustomSlide";
import * as selectors from '../../store/selectors';
import { fetchHotCollections } from "../../store/actions/thunks";
import api from "../../core/api";

const CarouselCollectionRedux = () => {

  const dispatch = useDispatch();
  const hotCollectionsState = useSelector(selectors.hotCollectionsState);
  const hotCollections = hotCollectionsState.data ? hotCollectionsState.data : [];

  useEffect(() => {
    dispatch(fetchHotCollections());
}, [dispatch]);

// FILTER HOT COLLECTION TO ONLY INCLUDE ENTITIES WHERE AUTHOER WEXISTS
const collectionWhereAuthorExists = hotCollections.filter(x => {
  return x.author 
})



  return (
      <div className='nft'>
        <Slider {...settingsnew}>
          { collectionWhereAuthorExists && collectionWhereAuthorExists.map((item, index) => (
            <CustomSlide
              key={index}
              index={index + 1}
              avatar={api.baseUrl + item.author.avatar.url}
              banner={api.baseUrl + item.banner.url}
              username={item.name}
              uniqueId={item.unique_id}
              collectionId={item.id}
            />
          ))}
        </Slider>
      </div>
  );
}

export default memo(CarouselCollectionRedux);
