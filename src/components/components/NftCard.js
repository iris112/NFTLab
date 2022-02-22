import React, { memo } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

//react functional component
const NftCard = ({ nft, className = 'd-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4', clockTop = true, height, onImgLoad }) => {
    const navigate = useNavigate()
    const navigateTo = (link) => {
        navigate(link);
    }

    return (
        <div className={className}>
            <div className="nft__item m-0">
            {/* { nft.item_type === 'single_items' ? (
             <div className='icontype'><i className="fa fa-bookmark"></i></div>   
             ) : (  
             <div className='icontype'><i className="fa fa-shopping-basket"></i></div>
                )
            } */}
                {/* { nft.deadline && clockTop &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                } */}
                
                {/* TO DO: Fix design here */}
                {/* <span onClick={()=> window.open("/AuthorGrey/"+nft.author.id, "_self")}>{nft.author.username}</span> */}

                <div className="nft__item_wrap" onClick={() => navigateTo("/ItemDetail/"+nft.id)} style={{height: `${height}px`}}>
                <Outer>
                    <span>
                        <img onLoad={onImgLoad} src={ nft.preview_image.url} className="lazy nft__item_preview" alt=""/>
                    </span>
                </Outer>
                </div>
                {/* { nft.deadline && !clockTop &&
                    <div className="de_countdown">
                        <Clock deadline={nft.deadline} />
                    </div>
                } */}
                <div className="spacer_16"></div>
                <div className="nft__item_info">
                    <span>
                        <div className="author_holder" onClick={()=> navigateTo("/Artist/"+nft.author.id)}>
                            <img className="lazy" src={ nft.author.avatar.url} alt=""/>
                            <p>{nft.author.username}</p>
                        </div>


                        <div className="spacer_16"></div>
                        <h3 onClick={() => navigateTo("/ItemDetail/"+nft.id)}><i>{nft.title}</i> <span style={{fontWeight: 200, fontSize: 12}}>{nft.artwork_date}</span></h3>
                        <h6 style={{fontWeight: 'normal', margin: 0}}>{nft.artwork_medium}</h6>
                        <h6 style={{fontWeight: 'normal', margin: 0}}>{nft.artwork_size}</h6>
                        <p style={{fontWeight: 'normal', margin: 0}}>{nft.unique_id}</p>


                        {/* <h1><i>{nft.title}</i> <span style={{fontWeight: 200, fontSize: 16}}>{nft.artwork_date}</span></h1>

                        <h3 style={{fontWeight: 'normal'}}>{nft.artwork_medium}</h3>
                        <h3 style={{fontWeight: 'normal'}}>{nft.artwork_size}</h3>
                        
                        <p>{nft.author && nft.author.about}</p>
                        <p style={{fontWeight: 'normal'}}>{nft.unique_id}</p> */}
                        {/* <p style={{fontWeight: 'normal'}}>{nft.unique_id}</p> */}
                        {/* <h3>{nft.title}</h3>
                        <p>{nft.unique_id}</p>
                        <p>{nft.category}</p> */}


                        
                        
                    </span>
                    {/* { nft.status === 'has_offers' ? (
                            <div className="has_offers">
                                <span className='through'>{nft.priceover}</span> {nft.price} ETH
                            </div> 
                        ) : (
                            <div className="nft__item_price">
                                {nft.price} ETH
                                { nft.status === 'on_auction' && 
                                    <span>{nft.bid}/{nft.max_bid}</span>
                                }
                            </div>
                        )
                    } */}
                    {/* <div className="nft__item_action">
                        <span onClick={() => navigateTo(`${nft.bid_link}/${nft.id}`)}>{ nft.status === 'on_auction' ? 'Place a bid' : 'Buy Now' }</span>
                    </div> */}

                    {/* Hide Hearts */}
                    {/* <div className="nft__item_like">
                        <i className="fa fa-heart"></i><span>{nft.likes}</span>
                    </div>                             */}
                </div> 
            </div>
        </div>             
    );
};

export default memo(NftCard);