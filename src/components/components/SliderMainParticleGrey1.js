import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const inline = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  .d-inline{
    display: inline-block;
   }
`;

const slidermainparticle= () => (
 <div className="container">
    <div className="row align-items-center">
          <div className=" col-lg-6 col-md-12">
              <div className="spacer-single"></div>
              {/* <h6> <span className="text-uppercase color">INVICTUS NFT LAB</span></h6> */}
            <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce>
              <h1 className="whiteText">Own, trade & <span className="color">take delivery of Physical Art</span> through the blockchain</h1>
            </Reveal>
            <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={900} triggerOnce>
              <p className="lead whiteText">
              We’re revolutionizing the art industry by combining the best of Blockchain Tech and Fine Art through a professionally curated collection of Physical Artworks from Southern Africa’s top contemporary Fine Artists.
              </p>
            </Reveal>
            <div className="spacer-10"></div>
            <Reveal className='onStep d-inline' keyframes={inline} delay={800} duration={900} triggerOnce>
              <span onClick={()=> window.open("/Artworks", "_self")} className="btn-main inline lead">Explore Collection</span>
              <span onClick={()=> window.open("https://cdn.invictuscapital.com/whitepapers/The_NFT_Lab_The_out_of_africa_collection-litepaper.pdf", "_blank")} className="btn-main inline white lead">Download Litepaper</span>
            <div className="mb-sm-30"></div>
            </Reveal>

            <Reveal className='onStep d-inline' keyframes={inline} delay={900} duration={1200} triggerOnce>
            {/* <div className="row">
                <div className="spacer-single"></div>
                <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-4 mb30">
                            <div className="de_count text-left">
                                <h3><span className="whiteText">118</span> <span className="color">O-NFTs</span> <span>_Original Artwork NFTs</span></h3>
                                <h5 className="id-color whiteText">Act as Physical Artwork's certificate of ownership</h5>
                                <p>Auctions March 2022</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-4 mb30">
                            <div className="de_count text-left">
                                <h3><span className="whiteText">1770</span> <span className="color">P-NFT</span> <span>_Poster Artwork NFTs</span></h3>
                                <h5 className="id-color whiteText">Deflationary posters burnt using project revenue</h5>
                                <p>Free lottery Feb 2022</p>
                            </div>
                        </div>

                        
                    </div>
            </div> */}
            </Reveal>
            <div className="spacer-single"></div>
          </div>
      </div>
    </div>
);

export default slidermainparticle;