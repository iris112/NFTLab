import React from 'react';
import ColumnNewRedux from '../components/ColumnNewRedux';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import TopFilterBar from '../components/TopFilterBar';

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
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }

  // ANIMATED GRADIENT 1
  .gradbg1 {
    background: linear-gradient(-45deg, #f0bc58, #f0bc58, #B263F4);
    background-size: 400% 400%;
    animation: gradient1 15s ease infinite;
  }

  @keyframes gradient1 {
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

  <section className='jumbotron breadcumb no-bg gradbg1' >
    <div className='mainbreadcumb'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-6'>
            <p class="text-uppercase col-white" style={{opacity: '50%'}}>INVICTUS NFT LAB: OUT OF AFRICA COLLECTION</p>
            <img className="lazy collection-logo" src={'./img/OOA Logo Color White.png'} alt=""/>
            
            <h1 className="header-description">118 Artworks</h1>
            <h3 className="col-white header-description">Celebrate Southern Africa's top contemporary Fine Artists with the world's first curated collection of physical Fine Art sold via the blockchain.</h3>
          </div>
          <div className='col-md-6'>
            <img className="lazy collection-logo" src={'./img/ONFT.png'} alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container'>
        {/* <div className='row'>
          <div className='col-lg-12'>
              <TopFilterBar />
          </div>
        </div> */}
       <ColumnNewRedux/>
      </section>


  <Footer />
</div>

);
export default artworks;