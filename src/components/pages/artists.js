import React from 'react';
import ColumnNewRedux from '../components/ColumnNewRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import TopFilterBar from '../components/TopFilterBar';
import AuthorListRedux from '../components/AuthorListRedux';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: linear-gradient(90deg, #f0bc58 -0.02%, #dd6c99 50%);
    border-bottom: 0;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);;
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: linear-gradient(90deg, #f0bc58 -0.02%, #dd6c99 50%);
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }

  // ANIMATED GRADIENT 2
  .gradbg2 {
    background: linear-gradient(-45deg, #B263F4, #e73c7e, #23a6d5, #3BF3F9);
    background-size: 400% 400%;
    animation: gradient2 15s ease infinite;
  }
  
  @keyframes gradient2 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .gradbg3 {
    background: linear-gradient(-45deg, #2BCCC7, #2BCCC7, #1EC167, #1EC167);
    background-size: 400% 400%;
    animation: gradient2 15s ease infinite;
  }
  
  @keyframes gradient2 {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .collection-logo {
    width: 512px;
    margin: 32px 0;
    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  }
  .header-description {
    line-height: 1.6;
  }
`;

const artworks= () => (
<div>
<GlobalStyles/>

  <section className='jumbotron breadcumb no-bg gradbg2' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <p class="text-uppercase col-white" style={{opacity: '50%'}}>TOP SOUTH AFRICAN ARTISTS</p>
            <img className="lazy collection-logo" src={'./img/OOA Logo Color White.png'} alt=""/>
            
            <h1 className="header-description">43 Contributing Fine Artists</h1>
            <h3 className="col-white header-description">We’ve partnered with a professional curator to create a collection including some of Southern Africa’s top contemporary Fine Artists.</h3>
          </div>
          <div className='col-md-6'>
            <img className="lazy collection-logo" src={'./img/PNFT.png'} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <section className='pb60'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          
          <img className="lazy collection-logo" src={'./img/OOA Logo Color Black.png'} alt=""/>
          <h2>Top South African Artists</h2>
          <h3>These are the first artists to be featured in the first fine art collection sold via the blockchain.</h3>
            
        </div>
      </div>
    </div>
  </section> */}

  <section className='pb60 gradbg3'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <AuthorListRedux/>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</div>

);
export default artworks;