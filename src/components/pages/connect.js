import React, { useState } from 'react';
import Footer from '../components/footer';
import SliderMainParticleGrey from '../components/SliderMainParticleGrey1';
import { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { walletConnect } from '../../store/actions/thunks/wallet';
import * as selectors from '../../store/selectors';
import { shortAddress } from "../../store/utils";

const GlobalStyles = createGlobalStyle`
// ANIMATED GRADIENT 1
.gradbg1 {
  background: linear-gradient(90deg, #B263F4 5%, #3BF3F9 20.01%);
  background-size: 400% 400%;
  animation: gradient1 15s ease infinite;
  position: absolute;
  top:100px;
  left:0;
  height:100%;
  width:100%;
  z-index:-5;
}
.breadcumb.h-vh {
  height: 100px;
}
.wallet-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: calc(100vh - 650px);

  h1, h2, h3, p {
    color: white;
  }
  .title {
    width: 100%;

    h1:first-child {
      display: inline-flex;
    }

    .switch-container {
      display: flex;

      .switch {
        padding: 10px 20px;
        border-radius: 5px;
        border: 1px solid gray;
        background: white;
        color: gray;
        z-index: auto;
        cursor: pointer;
      }
  
      .active {
        z-index: 1;
        color: black;
      }
    }

    .wallet-icon {
      margin: 0;
      padding: 10px!important;
      border-radius: 50px;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 25px;
      background: linear-gradient(90deg, #f0bc58 -0.02%, #dd6c99 100%) white;
    }

    .wallet-connected {
      justify-content: center;
      display: inline-flex;
      margin-left: 30px;
    }

    .address-container {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-left: 10px;

      p {
        margin: 0;
        padding: 0;
      }

      p:first-child {
        font-size: 12px;
      }

      p:last-child {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
  .connect-container {
    text-align: center;

    .connect-wallet{
      padding: 25px 40px!important;
      border-radius: 40px!important;
      cursor: pointer;
    }
  }
  .nft-container {
    margin-top: 50px;
    text-align: left;
    width: 100%;

    p {
      margin: 0;
      padding: 0;
    }

    p:first-child {
      font-size: 25px;
    }

    p:last-child {
      font-size: 35px;
      font-weight: bold;
      margin-top: 50px;

      a {
        text-decoration: underline;
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .gradbg1 {
    top: 80px;
  }
  .breadcumb.h-vh {
    background-image: none !important;
    height: 80px;
  }
}
`;

const Connect = () => {
  const [isPNFT, setIsPNFT] = useState(true);
  const dispatch = useDispatch();
  const connected = useSelector(selectors.walletConnectState);
  const accountAddress = useSelector(selectors.walletAddressState);

  const switchNftType = (value) => {
    setIsPNFT(value);
  }

  const handleConnect = () => {
    dispatch(walletConnect());
  }

  return (
    <div>
    <GlobalStyles/>

      <section className="jumbotron breadcumb no-bg h-vh ">
      </section>

      <section className='container'>
        <div className="gradbg1"></div>
        <div className='wallet-container'>
          <div className='title'>
            <h1>My Wallet</h1>
            { connected.data && <div className='wallet-connected'>
              <p className='wallet-icon'><i className="fas fa-wallet"></i></p>
              <div className='address-container'>
                <p>Wallet connected</p>
                <p>{shortAddress(accountAddress.data)}</p>
              </div>
            </div> }
            <div className='switch-container'>
              <span 
                className={`switch ${isPNFT ? 'active' : ''}`} 
                onClick={() => switchNftType(true)}
              >
                P-NFTs
              </span>
              <span 
                className={`switch ${isPNFT ? '' : 'active'}`} 
                style={{marginLeft: "-5px"}} 
                onClick={() => switchNftType(false)}
              >
                O-NFTs
              </span>
            </div>
          </div>
          { !connected.data && <div className='connect-container'>
            <img src="/img/wallet/1.png" style={{margin: "100px 0 50px 0"}} width="100" height="100"/>
            <h3>Connect your wallet to get started</h3>
            <h2 className="connect-wallet" onClick={handleConnect}>
              <i className="fas fa-wallet"></i>&nbsp;
              Connect your wallet
            </h2>
          </div> }

          { connected.data && 
            <div className='nft-container'>
              <p>You do not have any P-NFT's in your wallet</p>
              <p>Go to the <Link to="/lottery">lottery page</Link> to register your interest</p>
            </div>
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Connect;