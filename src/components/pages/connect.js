import React, { useState } from 'react';
import Footer from '../components/footer';
import SliderMainParticleGrey from '../components/SliderMainParticleGrey1';
import { createGlobalStyle } from 'styled-components';
import { useDispatch } from 'react-redux';
import { walletConnect } from '../../store/actions/thunks/wallet';

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
  }
  .connect-container {
    text-align: center;

    .connect-wallet{
      padding: 25px 40px!important;
      border-radius: 40px!important;
      cursor: pointer;
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
          <div className='connect-container'>
            <img src="/img/wallet/1.png" style={{margin: "100px 0 50px 0"}} width="100" height="100"/>
            <h3>Connect your wallet to get started</h3>
            <h2 className="connect-wallet" onClick={handleConnect}>
              <i className="fas fa-wallet"></i>&nbsp;
              Connect your wallet
            </h2>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Connect;