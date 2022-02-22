import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from "react-router-dom";
import * as selectors from '../../store/selectors';
import { getBlogPosts } from "../../store/actions/thunks";

const GlobalStyles = createGlobalStyle`

  // ANIMATED GRADIENT 1
  .gradbg1 {
    background: linear-gradient(-45deg, #f0bc58, #f0bc58, #B263F4);
    background-size: 400% 400%;
    animation: gradient1 15s ease infinite;
  }

  header#myHeader.navbar.sticky.white {
    background: linear-gradient(-45deg, #f0bc58, #f0bc58, #B263F4);
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: linear-gradient(-45deg, #f0bc58, #f0bc58, #B263F4);
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }

  newsheader {
    width: 100%;
    height: 350px;
  }

  .post-image {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }

  .post-image p {
    padding: 8px;
    margin: 0;
    width: fit-content;
    line-height: 1;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    position: absolute;
    top: 8px;
    right: 8px;
  }

  .Article {
    background: linear-gradient(-45deg, #f0bc58, #f0bc58, #B263F4);
  }
  
  .Podcast {
    background: linear-gradient(90deg, #B263F4 -0.03%, #3BF3F9 100.01%)
  }
`;

const News = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
      navigate(link);
  }

  const dispatch = useDispatch();
  const blogsState = useSelector(selectors.blogsState);
  const blogPosts = blogsState.data ? blogsState.data : [];

  // console.log({blogPosts});
  
  const newblogposts = blogPosts.sort((b,a) => a.id - b.id);
  
  // console.log({newblogposts});


  

  useEffect(() => {
      dispatch(getBlogPosts());
  }, [dispatch]);
  
return (
  <div>
  <GlobalStyles/>

    <section className='newsheader jumbotron breadcumb no-bg gradbg1'>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12 text-center'>
              <h1>News & Podcasts</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className="row">
        {newblogposts && newblogposts.map((blog, index) => (
          <div className="col-lg-4 col-md-6 mb30" key={index}>
            <div className="bloglist item">
                <div className="post-content">
                    <div className={"post-image"}>
                        <img alt="" src={blog.cover && blog.cover.url} className="lazy"/>
                        <p className={blog.news_type}>{blog.news_type && blog.news_type}</p>
                    </div>
                    <div className="post-text">
                        {/* <span className="p-tagline">Tips &amp; Tricks</span> */}
                        {/* <span className="p-date">{moment(blog.timestamp).format('L, LT')}</span> */}
                        <h4><span>{blog.title}</span></h4>
                        <p>{blog.content.substring(0, 304)}...</p>



                        {blog.news_type == "Article" &&
                            <span onClick={()=> window.open(blog.article_link, "_blank")} className={"btn-main " + blog.news_type}>Read full article <i className="fa fa-external-link"></i></span>
                        }

                        {blog.news_type == "Podcast" &&
                            <span onClick={()=> window.open(blog.article_link, "_blank")} className={"btn-main " + blog.news_type}>Listen to full podcast <i className="fa fa-external-link"></i></span>
                        }
                        
                    </div>
                </div>
            </div>
          </div>
        ))}

          {/* <div className="spacer-single"></div>
                  
          <ul className="pagination">
              <li><span className='a'>Prev</span></li>
              <li className="active"><span className='a'>1</span></li>
              <li><span className='a'>2</span></li>
              <li><span className='a'>3</span></li>
              <li><span className='a'>4</span></li>
              <li><span className='a'>5</span></li>
              <li><span className='a'>Next</span></li>
          </ul> */}
          
      </div>
    </section>

    <Footer />
  </div>
  )
};

export default memo(News);