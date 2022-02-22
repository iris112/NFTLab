import React, { memo, useEffect } from "react";
// import { useSelector, useDispatch } from 'react-redux';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useNavigate } from "react-router-dom";
import * as selectors from '../../store/selectors';

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

  .accordion a {
    color: #f0bc58 !important;
  }

  .faqimage {
    width: 100%;
    height: auto;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 16px;
  }
`;

const News = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
      navigate(link);
  }

  // const dispatch = useDispatch();
  // const blogsState = useSelector(selectors.blogsState);
  // const blogPosts = blogsState.data ? blogsState.data : [];

  // useEffect(() => {
  //     dispatch(getBlogPosts());
  // }, [dispatch]);
  
return (
  <div>
  <GlobalStyles/>

    <section className='newsheader jumbotron breadcumb no-bg gradbg1'>
      <div className='mainbreadcumb'>
        <div className='container'>
          <div className='row m-10-hor'>
            <div className='col-12 text-center'>
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='container'>
      <div className="row">
          {/* FREQUENTLY ASKED QUESTIONS */}
          <div className="col-md-6">

            <div className=""><h2>Frequently Asked Questions</h2></div>
            <Accordion defaultActiveKey="0">

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    I don’t have any cryptocurrency, can I participate?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>Participation in the free P-NFT lottery requires a free-to-create Ethereum Web3 wallet, such as a <a href="https://metamask.io/download" target="_blank">MetaMask</a> wallet and a small amount of Ether for network fees ($5-25) to secure your entry.</p>

                    <p>You will need to fund your Ethereum wallet with ETH — purchased using your credit/debit card, or through a secure cryptocurrency exchange like <a href="http://Coinbase.com" target="_blank">Coinbase</a>, <a href="http://Binance.com" target="_blank">Binance</a>, or <a href="http://ftx.com" target="_blank">FTX</a>. A detailed step-by-step walkthrough can be found by scrolling further down this page, or clicking here.  Feel free to reach out if you’re struggling to find a suitable exchange that serves your jurisdiction.</p>

                    <p>To stand a decent chance of winning one of the descending price auctions for the Original Artwork NFTs in Phase 2, we recommend funding your wallet with significantly more ETH.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    What is the NFT Lab? 
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body> 
                    <p>The NFT Lab is an Invictus initiative enabling the sale of physical artworks (in a range of artistic mediums) via the blockchain. The project incorporates NFT technology, decentralized community building and, most importantly, the traditional fine art world.</p>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    What is the Out of Africa Collection? 
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body> 
                    <p>The Out of Africa Collection is the world's first example of a curated collection from a host of professional fine artists at the top of their game being auctioned on the blockchain — with NFT representations of these artworks acting as certificates of ownership, and granting the holder the right to take delivery of the physical artwork. 100 unique, real-world artworks will be sold via a blockchain-based auction for these "original artwork", or O-NFTs.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    How many artworks are available?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body> 
                    <p>100 unique physical artworks will be available via a series of descending-price auctions, with 100 "original artwork" NFTs, or O-NFTs, acting as the holder's claim to delivery. In addition, 2,500 P-NFTs will exist, the majority of which will be available via a free-to-enter lottery.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    What is the difference between a Poster NFT (P-NFT), Original Artwork NFT (O-NFT) and a Claimed NFT (C-NFT)?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body> 
                    <p>P-NFTs, which are deflationary assets, can be won via a free lottery or purchased on OpenSea. They are scarce digital representations of the original artwork, however, they do not give the holder the right to claim the original artwork for delivery.</p>

                    <p>An O-NFT is a digital representation of the underlying original artwork piece held in custody and gives the holder the right to take physical delivery of the artwork. There is therefore only one O-NFT per artwork.</p>

                    <p>An O-NFT that has been redeemed to take delivery of the physical artwork is replaced by a C-NFT.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    How do I get a P-NFT for free?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body> 
                    <p>Simply participate in our free-to-enter lottery from January to participate in the project and stand a chance of winning a historic P-NFT. After the draw, trading on OpenSea will begin. There will also be P-NFT giveaways in the leadup to the auctions for our loyal fans.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    Do P-NFTs have intrinsic value?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body> 
                    <p>Yes! Firstly, P-NFTs grant the holder the right to participate in the O-NFT auctions (any P-NFT gives you access to ALL auctions). This allows you to bid for beautiful physical artworks and an accompanying NFT. Additionally, 10% of initial sales revenue and 0.5% of each resale on both O- and P-NFTs will accrue to the community treasury, to be used to opportunistically buy-and-burn the P-NFTs listed at the lowest prices (i.e. from the ‘floor’). Each NFT grants a holder one vote towards decision making around the Community Treasury's use.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    Is there a whitelist?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body> 
                    <p>Because participation in the P-NFT distribution is free, there is no need for a whitelist! But stick around, early supporters and active members of the community will stand a better chance to win prizes in our marketing campaigns.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="8">
                    Will Invictus Capital investors receive any perks?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="8">
                  <Card.Body> 
                    <p>Yes! Invictus Capital investors will have a greater chance of winning P-NFTs in many of our upcoming marketing campaigns.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="9">
                    Where are the image files stored?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="9">
                  <Card.Body> 
                    <p>Image files are stored immutably on Arweave. Your NFT will always display a beautiful artwork.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="10">
                    Who covers the cost of delivery for an Original Artwork?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="10">
                  <Card.Body> 
                    <p>As with traditional art purchases, delivery is borne by the purchaser. However, if you plan to hold the O-NFT and artwork purely for speculative purposes, you can opt not to redeem, keeping the art with our nominated custodian.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="11">
                   Where are the physical artworks stored?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="11">
                  <Card.Body> 
                    <p>The physical artworks are stored securely with a custodian nominated by the team. More details are outlined in the Litepaper.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="12">
                    Who owns the rights to the images, is this legal?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="12">
                  <Card.Body> 
                    <p>We’ve contracted with each artist individually to ensure that legal ownership of each physical artwork lies with the Team, as well as to secure the exclusive rights to the production of NFTs using the artworks. O-NFT holders own the artworks! Furthermore, your NFT’s image will be stored permanently on IPFS using Arweave after minting — outside of our control.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="13">
                    Is the NFT metadata frozen/tamperable?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="13">
                  <Card.Body> 
                    <p>NFT metadata, including images, will be stored immutably on IPFS using <a href="https://www.arweave.org/" target="_blank">Arweave</a> and frozen post-mint.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>


            </Accordion>
            
          </div>


          {/* GETTING STARTED */}
          <div className="col-md-6">

            <div>
              <h2>Getting started guide</h2>
              <p>Follow the step by step instructions below to begin to dip your toes into the exciting world of NFTs, using the MetaMask Web3 wallet.</p>
            </div>
            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    A primer on Ethereum and NFTs
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>The Out of Africa NFT collection is built on Ethereum, a blockchain platform that allows artwork creation and ownership to be authenticated & verified. The NFTs are represented by unique tokens stored on the network and act as a permanent, untamperable record of provenance and ownership.</p>

                    <p>The digital currency, or cryptocurrency, native to Ethereum is called ether, or ETH. All transactions on the Ethereum blockchain require a small spend of ETH to pay for its processing by the network. This includes participation in the Poster NFT Lottery, where you can expect participation to cost $5-25 in ETH. The auctions for the Original Artwork NFTs sold in Phase Two will also be conducted in ETH.</p>

                    <p>Each user has an Ethereum account, also known as a wallet. Your wallet is where your ETH and your NFTs are stored.</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    Setting up your first Ethereum wallet (mobile)
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body> 
                    <p>If you don’t already have a Web3 cryptocurrency wallet, we recommend using MetaMask. It is secure, trusted, and compatible with almost all Web3 applications.</p>
                    
                    <p>First, download the MetaMask iOS or Android app. Open the app and follow the prompts, as pictured below, to set up your wallet’s password.</p>

                    {/* <i className="fa fa-send"></i> */}
                    <img className="lazy faqimage" src={'./img/faq/metamaskMobile/Mobile_metamask1.jpeg'} alt=""/>

                    <p>Next, you’ll see the “Secret Backup Phrase” screen. These 12 words are VERY IMPORTANT to save OFFLINE in a secure location. These are ultimately the keys to your wallet and the only way to restore your account if you get locked out or lose your password.</p>

                    {/* <i className="fa fa-send"></i> */}
                    <img className="lazy faqimage" src={'./img/faq/metamaskMobile/Mobile_metamask2.jpeg'} alt=""/>

                    <p>Your account should now look like the image labeled 8. Congratulations, you’re now the proud owner of your very first Ethereum wallet! You’re now able to use the built-in browser (accessed by clicking the 3 lines in the top left and selecting ‘Browser’) to interact with any Web3 applications, including ours (use the button at the top right of the page)!</p>

                    {/* <i className="fa fa-send"></i> */}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    Setting up a your first Ethereum wallet (desktop)
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body> 
                    <p>If you don’t already have a Web3 cryptocurrency wallet, we recommend using MetaMask. It is secure, trusted, and compatible with almost all Web3 applications.</p>

                    <p>Go to https://metamask.io/ and install the MetaMask browser extension (we recommend using either Chrome or Firefox).</p>
                    
                    <p>Once MetaMask is installed, click on the little fox icon in your browser extension panel and follow the welcome prompts to create a password for your brand new Ethereum wallet.</p>

                    {/* <i className="fa fa-send"></i> */}
                    <img className="lazy faqimage" src={'./img/faq/metamaskDesktop/Desktop_metamask_1.png'} alt=""/>

                    <p>Next, you’ll see the “Secret Backup Phrase” screen. These 12 words are VERY IMPORTANT to save OFFLINE in a secure location. NEVER SHARE THIS WITH ANYONE as they are ultimately the keys to your wallet and the only way to restore your account if you get locked out or lose your password. </p>
                    
                    {/* <i className="fa fa-send"></i> */}
                    <img className="lazy faqimage" src={'./img/faq/metamaskDesktop/Desktop_metamask_2.png'} alt=""/>

                    <p>Your account should now look like this. Congratulations, you’re now the proud owner of your very first Ethereum wallet! Once you successfully create an account, your MetaMask should look like this. </p>
                    
                    {/* <i className="fa fa-send"></i> */}
                    <img className="lazy faqimage" src={'./img/faq/metamaskDesktop/Desktop_metamask_3.png'} alt=""/>

                    <p>You should now be able to connect your wallet to a range of Web3 websites, including ours (the button at the top right of the page), to interact with the blockchain!</p>


                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    1. Funding your MetaMask wallet with ETH
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="4">
                  <Card.Body> 
                    <p>We suggest using one of two methods to acquire your ETH; either directly through MetaMask, or by purchasing ETH on a secure cryptocurrency exchange. like Coinbase, FTX, or Binance. Instructions for funding your MetaMask wallet through MetaMask or Coinbase are outlined below. The method on Coinbase will be very similar on other cryptocurrency exchanges.</p>

                    <h4>Metamask</h4>

                    <p>MetaMask makes it trivially easy to fund your wallet from your bank account by integrating with 3rd-party payment processors. Fees tend to be higher than using a crypto exchange.</p>

                    <ol>
                      <li>Open MetaMask and click 'Buy' <img className="lazy faqimage" src={'./img/faq/purchaseMetamask/MetamaskBuy1.png'} alt=""/></li>
                      <li>Select either Transak, Wyre, or Apple Pay to facilitate your purchase (availability may differ by region, different fees may apply).</li>
                      <li>Your browser should open a new window from which you can authorize payment.</li>
                      <li>Within a few minutes the purchased ETH should be credited to your MetaMask wallet. <img className="lazy faqimage" src={'./img/faq/purchaseMetamask/MetamaskBuy2.png'} alt=""/></li>
                    </ol>
                    
                    <h4>Coinbase</h4>

                    <p>MetaMask makes it trivially easy to fund your wallet from your bank account by integrating with 3rd-party payment processors. Fees tend to be higher than using a crypto exchange.</p>

                    <ol>
                      <li>Create (and verify) an account on Coinbase.</li>
                      <li>Follow the instructions here to buy ETH using your credit or debit card.</li>
                      <li>Copy your unique wallet address from MetaMask by clicking where indicated.<img className="lazy faqimage" src={'./img/faq/purchaseCoinbase/Coinbase1.png'} alt=""/></li>
                      <li>In Coinbase, select ‘Send/Receive’, copy your MetaMask wallet address, select ETH, the amount of ETH to send and click continue. You may be asked to perform another step to authorize the withdrawal.<img className="lazy faqimage" src={'./img/faq/purchaseCoinbase/Coinbase2.png'} alt=""/></li>
                      <li>After a few minutes, the ETH should arrive in your MetaMask wallet. <img className="lazy faqimage" src={'./img/faq/purchaseCoinbase/Coinbase3.png'} alt=""/></li>
                    </ol>

                    <p>You should now be able to connect your wallet to a range of Web3 websites, including ours (the button at the top right of the page), to interact with the blockchain!</p>


                  </Card.Body>
                </Accordion.Collapse>
              </Card>


              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    2. Entering the Poster NFT lottery
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="5">
                  <Card.Body> 

                    <ol>
                      <li>Navigate to the website’s home page and connect your MetaMask to the website using the ‘Connect wallet’ button.</li>
                      <li>Click ‘Enter Lottery’. An estimate of your win probability will be displayed.</li>
                      <li>A MetaMask popup should appear asking for you to confirm the blockchain transaction (that secures your entry). Click ‘Confirm’. <i>Note: you will need sufficient ETH in your wallet for this transaction to be processed by the network. If you do not have enough ETH in your wallet, you may need to send more into your wallet to cover transaction costs.</i></li>
                      <li>You’re now entered! Wait until the lottery period is over to see if you won and claim your Poster NFT!</li>
                    </ol>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="6">
                    3. Purchasing an Out of Africa NFT on OpenSea
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="6">
                  <Card.Body> 
                    <p>Details coming soon</p>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="7">
                    3. Participating in the Original Artwork auctions
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="7">
                  <Card.Body> 
                    <p>Details coming soon</p>

                  </Card.Body>
                </Accordion.Collapse>
              </Card>


            </Accordion>
            
          </div>
      </div>








      
     

      
    </section>

    <Footer />
  </div>
  )
};

export default memo(News);