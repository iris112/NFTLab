import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Clock from "../components/Clock";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import * as selectors from '../../store/selectors';
import { fetchNftDetail } from "../../store/actions/thunks";
/*import Checkout from "../components/Checkout";
import Checkoutbid from "../components/Checkoutbid";*/
import api from "../../core/api";
import moment from "moment";
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import { useNavigate, useParams } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
    border-bottom: solid 1px #dddddd;
  }
  .mr40{
    margin-right: 40px;
  }
  .mr15{
    margin-right: 15px;
  }
  .btn2{
    background: #f6f6f6;
    color: #8364E2 !important;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }

  .item_author {height:48px;}

  .opensea-link {
      background-color: #2383e2;
      padding: 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      h5 {
        margin-bottom: 0;
        margin-right: 8px;
        color: white;
      }
      img {
          width: 144px;
          height: auto;
      }
  }

  .disabled {
      opacity: 0.5;
      cursor: not-allowed !important;
  }
`;

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

const ItemDetailRedux = () => {

    const navigate = useNavigate();
    const { nftId } = useParams();
    const [openMenu0, setOpenMenu0] = React.useState(true);
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);

    // const handleBtnClick0 = () => {
    //     setOpenMenu0(!openMenu0);
    //     setOpenMenu(false);
    //     setOpenMenu1(false);
    //      document.getElementById("Mainbtn0").classList.add("active");
    //     document.getElementById("Mainbtn").classList.remove("active");
    //     document.getElementById("Mainbtn1").classList.remove("active");
    // };
    // const handleBtnClick = () => {
    //     setOpenMenu(!openMenu);
    //     setOpenMenu1(false);
    //     setOpenMenu0(false);
    //     document.getElementById("Mainbtn").classList.add("active");
    //     document.getElementById("Mainbtn1").classList.remove("active");
    //     document.getElementById("Mainbtn0").classList.remove("active");
    // };
    // const handleBtnClick1 = () => {
    //     setOpenMenu1(!openMenu1);
    //     setOpenMenu(false);
    //     setOpenMenu0(false);
    //     document.getElementById("Mainbtn1").classList.add("active");
    //     document.getElementById("Mainbtn").classList.remove("active");
    //     document.getElementById("Mainbtn0").classList.remove("active");
    // };

    const dispatch = useDispatch();
    const nftDetailState = useSelector(selectors.nftDetailState);
    const nft = nftDetailState.data ? nftDetailState.data : [];

    const hasNftLink = nft.nft_link;

    // const [openCheckout, setOpenCheckout] = React.useState(false);
    // const [openCheckoutbid, setOpenCheckoutbid] = React.useState(false);

    useEffect(() => {
        dispatch(fetchNftDetail(nftId));
    }, [dispatch, nftId]);

    return (
        <div>
        <GlobalStyles/>
            <section className='container'>
                <div className='row mt-md-5 pt-md-4'>
                    <div className="col-md-6 text-center">
                        <img src={ nft.preview_image &&  nft.preview_image.url} className="img-fluid img-rounded mb-sm-30" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="item_info">
                            {nft.item_type === 'on_auction' &&
                                <>
                                    Auctions ends in 
                                    <div className="de_countdown">
                                        <Clock deadline={nft.deadline} />
                                    </div>
                                </>
                            }
                            
                            <div className="d-flex flex-row">
                                <div className="mr40">
                                    {/* <h6>Artist</h6> */}
                                    <div className="item_author" style={{cursor: "pointer"}} onClick={()=> navigate("/Artist/"+nft.author.id, "_self")}>                                    
                                        <div className="author_list_pp">
                                            <span>
                                                <img className="lazy" src={nft.author &&  nft.author.avatar.url} alt=""/>
                                            </span>
                                        </div>                                    
                                        <div className="author_list_info">
                                            <h4>{nft.author && nft.author.username}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="item_info_counts">
                                <div className="item_info_type"><i className="fa fa-image"></i>{nft.category}</div>
                                <div className="item_info_views"><i className="fa fa-eye"></i>{nft.views}</div>
                                <div className="item_info_like"><i className="fa fa-heart"></i>{nft.likes}</div>
                            </div> */}

                            <h1 style={{marginBottom: "16px", lineHeight: "1.1" }}><i>{nft.title}</i> <span style={{fontWeight: 200, fontSize: 16}}>{nft.artwork_date}</span></h1>

                            <h3 style={{fontWeight: 'normal', marginBottom: "16px"}}>{nft.artwork_medium}</h3>
                            <h3 style={{fontWeight: 'normal', marginBottom: "16px"}}>{nft.artwork_size}</h3>
                            
                            <p>{nft.author && nft.author.about}</p>
                            <p style={{fontWeight: 'normal'}}>{nft.unique_id}</p>

                            

                            <div className="spacer-40"></div>

                            <div className="de_tab">

                            {/* <ul className="de_nav">
                                <li id='Mainbtn0' className="active"><span onClick={handleBtnClick0}>Details</span></li>
                                <li id='Mainbtn' ><span onClick={handleBtnClick}>Bids</span></li>
                                <li id='Mainbtn1' className=''><span onClick={handleBtnClick1}>History</span></li>
                            </ul> */}
                                        
                            <div className="de_tab_content">
                                {openMenu0  && (  
                                <div className="tab-1 onStep fadeIn">
                                    <div className="d-block">
                                        {/* <div className="mr40">
                                            <h6>Owner</h6>
                                            <div className="item_author">                                    
                                                <div className="author_list_pp">
                                                    <span>
                                                        <img className="lazy" src={nft.author &&  nft.author.avatar.url} alt=""/>
                                                        <i className="fa fa-check"></i>
                                                    </span>
                                                </div>                                    
                                                <div className="author_list_info">
                                                    <span>{nft.author && nft.author.username}</span>
                                                </div>
                                            </div>
                                        </div> */}


                                        
                                        <div className="row">
                                            <div className="nft_attr_holder col-lg-6 col-md-6 col-sm-12">
                                                <div className="nft_sample onStep">
                                                    <img src={ nft.preview_image &&  nft.preview_image.url} className="img-fluid img-rounded mb-sm-30" alt=""/>
                                                </div>
                                                <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={900} triggerOnce></Reveal>
                                                <div className="nft_attr">
                                                    <h5>O-NFTs</h5>
                                                    <h3 className="mb-0">1 / 1 Original NFT</h3>
                                                    <span>Access to the original artwork</span>
                                                </div>

                                                {nft.status == "claimed" &&
                                                    <div className="nft_status claimed">
                                                        <p>STATUS</p>
                                                        <h3>{nft.status}</h3>
                                                    </div>
                                                }
                                                {nft.status == "unclaimed" &&
                                                    <div className="nft_status unclaimed">
                                                        <p>STATUS</p>
                                                        <h3>{nft.status}</h3>
                                                    </div>
                                                }


                                                
                                            </div>
                                            <div className="nft_attr_holder col-lg-6 col-md-6 col-sm-12">
                                                <div className="nft_sample">
                                                    <img src={ nft.preview_image &&  nft.preview_image.url} className="img-fluid img-rounded mb-sm-30" alt=""/>
                                                </div>
                                                <div className="nft_attr">
                                                    <h5>P-NFT</h5>
                                                    <h3 className="mb-0">{ nft.p_nfts_remaining} / 15 Print NFTs</h3>
                                                    <span>Revenue based deflationary NFT</span>
                                                </div>



                                                {hasNftLink ? (
                                                    <div className="nft_status opensea mb-0" onClick={()=> window.open(nft.nft_link, "_blank")}>
                                                        <p>BUY NOW ({nft.p_nfts_remaining} LEFT)</p>
                                                        <div className="oneline">
                                                            <h3 className="mb-0">Opensea</h3>
                                                            <i className="fa fa-external-link"></i>
                                                        </div>
                                                    </div>
                                                ) : (   
                                                    <div style={{width: "100%"}}>
                                                        
                                                        <div className="nft_status opensea mb-0 disabled">
                                                            <p>COMING SOON</p>
                                                            <div className="oneline">
                                                                <h3 className="mb-0">Opensea</h3>
                                                                <i className="fa fa-external-link"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}



                                                {/* !LAST ONE LEFT */}
                                                {nft.p_nfts_remaining == 1 &&
                                                    <div className="nft_status opensea mb-0" onClick={()=> window.open(nft.nft_link, "_blank")}>
                                                        <p>BUY NOW (LAST ONE)</p>
                                                        <div className="oneline">
                                                            <h3 className="mb-0">Opensea</h3>
                                                            <i className="fa fa-external-link"></i>
                                                        </div>
                                                    </div>
                                                }

                                                {nft.p_nfts_remaining == 0 &&
                                                    <div className="nft_status mb-0">
                                                        <p>STATUS</p>
                                                        <h3 className="mb-0">Sold Out</h3>
                                                    </div>
                                                }
                                                
                                            </div>
                                        </div>

                                        <div className="spacer-40"></div>
                                        {/* button for checkout */}
                                        {/* <div className="flex-row opensea-link" onClick={()=> navigate("https://opensea.io/")}>
                                            <h5>View this NFT on Opensea</h5>
                                            <img className="lazy" src={'../img/OpenSea Logo White Alt.png'} alt=""/>
                                            <button className='btn-main lead mb-5 mr15' onClick={() => setOpenCheckout(true)}>View on OpenSea</button>
                                            <button className='btn-main btn2 lead mb-5' onClick={() => setOpenCheckoutbid(true)}>Place Bid</button>
                                        </div> */}

                                    </div>
                                </div>
                                )}

                                {/* {openMenu  && (  
                                <div className="tab-1 onStep fadeIn">
                                    {nft.bids && nft.bids.map((bid, index) => (
                                        <div className="p_list" key={index}>
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src={ bid.author.avatar.url} alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid {bid.author.id === nft.author.id && 'accepted'} <b>{bid.value} ETH</b>
                                                <span>by <b>{bid.author.username}</b> at {moment(bid.created_at).format('L, LT')}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                )}

                                {openMenu1 && ( 
                                <div className="tab-2 onStep fadeIn">
                                    {nft.history && nft.history.map((bid, index) => (
                                        <div className="p_list" key={index}>
                                            <div className="p_list_pp">
                                                <span>
                                                    <img className="lazy" src={ bid.author.avatar.url} alt=""/>
                                                    <i className="fa fa-check"></i>
                                                </span>
                                            </div>                                    
                                            <div className="p_list_info">
                                                Bid {bid.author.id === nft.author.id && 'accepted'} <b>{bid.value} ETH</b>
                                                <span>by <b>{bid.author.username}</b> at {moment(bid.created_at).format('L, LT')}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                )} */}


                                
                            </div>     
                        </div>          
                    </div>
                </div>
            </div>
        </section>
        <Footer /> 
        {/* { openCheckout &&
            <div className='checkout'>
            <div className='maincheckout'>
            <button className='btn-close' onClick={() => setOpenCheckout(false)}>x</button>
                <div className='heading'>
                    <h3>Checkout</h3>
                </div>
              <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span> 
              <span className="bold">from Monica Lucas</span></p>
                <div className='detailcheckout mt-4'>
                    <div className='listcheckout'>
                  <h6>
                    Enter quantity. 
                    <span className="color">10 available</span>
                  </h6>
                  <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control"/>
                    </div>

                </div>
                <div className='heading mt-3'>
                    <p>Your balance</p>
                    <div className='subtotal'>
                    10.67856 ETH
                    </div>
                </div>
              <div className='heading'>
                <p>Service fee 2.5%</p>
                <div className='subtotal'>
                0.00325 ETH
                </div>
              </div>
              <div className='heading'>
                <p>You will pay</p>
                <div className='subtotal'>
                0.013325 ETH
                </div>
              </div>
                <button className='btn-main lead mb-5'>Checkout</button>
            </div>
            </div>
        }
        { openCheckoutbid &&
            <div className='checkout'>
            <div className='maincheckout'>
            <button className='btn-close' onClick={() => setOpenCheckoutbid(false)}>x</button>
                <div className='heading'>
                    <h3>Place a Bid</h3>
                </div>
              <p>You are about to purchase a <span className="bold">AnimeSailorClub #304</span> 
              <span className="bold">from Monica Lucas</span></p>
                <div className='detailcheckout mt-4'>
                    <div className='listcheckout'>
                        <h6>
                         Your bid (ETH)
                        </h6>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                <div className='detailcheckout mt-3'>
                    <div className='listcheckout'>
                        <h6>
                         Enter quantity. 
                        <span className="color">10 available</span>
                        </h6>
                        <input type="text" name="buy_now_qty" id="buy_now_qty" className="form-control"/>
                    </div>
                </div>
                <div className='heading mt-3'>
                    <p>Your balance</p>
                    <div className='subtotal'>
                    10.67856 ETH
                    </div>
                </div>
              <div className='heading'>
                <p>Service fee 2.5%</p>
                <div className='subtotal'>
                0.00325 ETH
                </div>
              </div>
              <div className='heading'>
                <p>You will pay</p>
                <div className='subtotal'>
                0.013325 ETH
                </div>
              </div>
                <button className='btn-main lead mb-5'>Checkout</button>
            </div>
            </div>
        } */}

        </div>
    );
}

export default memo(ItemDetailRedux);