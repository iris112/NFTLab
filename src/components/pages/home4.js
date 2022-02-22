import React from 'react';
import SliderMainParticleGrey from '../components/SliderMainParticleGrey1';
// import CarouselCollectionRedux from '../components/CarouselCollectionReduxNew';
// import CarouselNewRedux from '../components/CarouselNewReduxNew';
import ColumnNewRedux from '../components/ColumnNewRedux';
import AuthorListRedux from '../components/AuthorListRedux';
import Catgor from '../components/Catgor';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`
  .navbar{
    background: #fff;
  }
  .col-white {
      color: #0d0c22;
  }
  .de_count{
    h3{
      font-size: 36px;
      margin-bottom: 0;
      span {
        font-size: 36px;
      }
    }
  }
  .btn-main.inline.white{
    background: rgba(131,100,266, .2);
  }
  .yelbg{
    background-color: rgb(255, 249, 225);
  }
  .yelbg-2{
    background-color: rgb(247, 255, 231);
  }
  .greybg{
    background-color: rgb(246, 245, 251);
  }

  // ANIMATED GRADIENT 1
  .gradbg1 {
    background: linear-gradient(-45deg, #f0bc58, #f0bc58, #dd6c99);
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

  h2{
    font-size: 30px;
    margin-bottom: 20px;
    margin-top:0;
  }
  .pb60 {
    padding-bottom: 60px;
    padding-top: 60px;
  }
  .breadcumb.h-vh{
    
  }
  @media only screen and (max-width: 992px) { 
    .breadcumb.h-vh{
      background-image: none !important;
      height: auto;
    }
  }

  .collection-logo {
    max-width: 200px;
    height: auto;
  }

  .opnftholders {
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    padding: 32px;
  }

  .fullnfttype {
    font-weight: 200 !important;
    font-size: 32px !important;
  }

  .widgetcard {
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    padding: 32px;
  }
`;


const home= () => (
  <div>
    <GlobalStyles />
      <section className="jumbotron breadcumb no-bg h-vh " style={{backgroundImage: `url(${'./img/background/14.png'})`}}>
         <SliderMainParticleGrey/>
         <div className="gradbg1" style={{position:'absolute',top:0,left:0,height:'100%', width:'100%', zIndex:'-5'}}></div>
      </section>
      

      <section className='container'>
        <div className="row">
          <div className="spacer-single"></div>
          
          <div className="col-lg-6 col-md-6 col-sm-12 mb30">
            <div className="de_count text-left opnftholders">
              <img className="lazy collection-logo" src={'./img/ONFT.png'} alt=""/>
              <h3><span>118</span> <span className="color">O-NFTs</span> <span className="fullnfttype">_Original Artwork NFTs</span></h3>
              <h5 className="id-color">Act as Physical Artwork's certificate of ownership</h5>
              <p>Auctions March 2022</p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb30">
            <div className="de_count text-left opnftholders">
              <img className="lazy collection-logo" src={'./img/PNFT.png'} alt=""/>
              <h3><span>1770</span> <span className="color">P-NFT</span> <span className="fullnfttype">_Poster Artwork NFTs</span></h3>
              <h5 className="id-color">Deflationary posters burnt using project revenue</h5>
              <p>Free lottery Feb 2022</p>
            </div>
          </div>

          

                  
              
        </div>

        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="widget widgetcard text-center gradbg3">
                  <h2 style={{color: "white"}}>Add your email to receive news and announcements</h2>
                  
                  <form action="https://www.getdrip.com/forms/598512062/submissions" method="post" data-drip-embedded-form="598512062" id="drip-ef-598512062" >
                      <div data-drip-attribute="description"></div>
                      <div style={{display: "none"}} aria-hidden="true">
                      <label for="website">Website</label><br />
                      <input type="text" id="website" name="website" tabindex="-1" autocomplete="false" value=""  />
                      </div>
                      <input type="hidden" name="tags[]" id="tags_" value="NFT_labs" tabindex="-1" />


                      <div>
                        <div>
                            <input type="email" id="drip-email" name="fields[email]" defaultValue="" placeholder="Your email address" style={{border: "2px solid #fff", textAlign: "center", fontSize: "1.6em",fontWeight: "bold",color: "white", background: "transparent", padding: "16px", borderRadius: "8px", width: "100%"}} />
                        </div>
                      
                        <div>
                          <input className="submitbutton" type="submit" value="Subscribe" data-drip-attribute="sign-up-button" style={{background: "linear-gradient(90deg, rgba(240, 188, 88, 0.65) -0.02%, rgba(221, 108, 153, 0.65) 100%)", width: "100%", border: "2px solid #fff", color: "white", borderRadius: "32px", padding: "16px", marginTop: "16px", cursor: "pointer", fontSize: "22px", fontWeight: "bold"}} />
                        </div>
                      </div>
                  </form>
              </div>
          </div>
        </div>
      </section>

      <section className='pb60 gradbg2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
                <h2 style={{color:'#fff'}}>Top South African Artists</h2>
            </div>
            <div className='col-lg-12'>
              <AuthorListRedux/>
            </div>
          </div>
        </div>
      </section>

      {/* <section className='pb60 yelbg-2'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2>Hot Collections</h2>
          </div>
          <div className='col-lg-12'>
            <CarouselCollectionRedux/>
          </div>
        </div>
        </div>
      </section> */}

      <section className='pb60 greybg'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
              <h2>Physical Art NFTs: Out Of Africa Collection</h2>
          </div>
          <div className='col-lg-12'>
            <ColumnNewRedux/>
          </div>
        </div>
        </div>
      </section>

    <Footer />

  </div>
);
export default home;