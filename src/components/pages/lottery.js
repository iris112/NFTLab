import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { createGlobalStyle } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { claim, fetchLottery, fetchLotteryStatus, stake, walletConnect } from '../../store/actions/thunks';
import * as selectors from '../../store/selectors';
import { shortAddress } from "../../store/utils";
import { mainNetId } from '../../core/opensea/constants';
import { Link } from 'react-router-dom';

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

    .connect-wallet {
      padding: 25px 40px!important;
      border-radius: 40px!important;
      width: fit-content;
      border: 1px solid white;
      margin: auto;
      cursor: pointer;
    }
  }

  .register-container {
    text-align: center;

    .register-entry {
      padding: 25px 40px!important;
      border-radius: 40px!important;
      background: linear-gradient(90deg, #B263F4 -0.03%, #3BF3F9 100.01%);
      border: 1px solid white;
      width: fit-content;
      margin: auto;
      cursor: pointer;
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
      display: flex;
      justify-content: center;
      margin: 100px 0 50px 0;
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

    .lottery-minted {
      font-size: 20px;
      margin-top: 50px;
    }

    .lottery-success {
      font-size: 35px;
      font-weight: bold;
      margin-top: 50px;
      max-width: 800px;
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

const Lottery = () => {
  const dispatch = useDispatch();
  const [lotterySuccess, setLotterySuccess] = useState(false);
  const connected = useSelector(selectors.walletConnectState);
  const accountAddress = useSelector(selectors.walletAddressState);
  const netId = useSelector(selectors.netIdState);
  const lottery = useSelector(selectors.lotteryState);
  const lotteryStatus = useSelector(selectors.lotteryStatus);
  
  const handleConnect = () => {
    dispatch(walletConnect());
  }

  const playLottery = () => {
    if ( accountAddress?.data && netId?.data == mainNetId ) {
      if (lotteryStatus?.data && !lotteryStatus?.data?.lotteryStacked) {
        dispatch(stake(accountAddress?.data));
      } else if (lotteryStatus?.data && !lotteryStatus?.data?.lotteryClaimed) {
        dispatch(claim(accountAddress?.data));
      }
    }
  }

  useEffect(() => {
    dispatch(fetchLottery());

    if (accountAddress?.data) {
      dispatch(fetchLotteryStatus(accountAddress?.data));
    }
  }, [accountAddress]);

  useEffect(() => {
    if (lotteryStatus?.data?.lotteryClaimed)
      setLotterySuccess(true);
  }, [lotteryStatus])

  return (
    <div>
    <GlobalStyles/>

      <section className="jumbotron breadcumb no-bg h-vh ">
      </section>

      <section className='container'>
        <div className="gradbg1"></div>
        <div className='wallet-container'>
          <div className='title'>
            <h1>Lottery</h1>
            <p>The sales process eliminates the frantic rush associated with minting most new NFT projects and simultaneously empowers anybody to be a part of NFT history. OA-NFTs will be auctioned off in a series of descending price auctions, with a schedule communicated to the community in advance. Participation in this auction will require holding a P-NFT in the bidding Ethereum wallet</p>
          </div>
          { connected.data
          ? <div className='register-container'>
              <div className='wallet-connected'>
                <p className='wallet-icon'><i className="fas fa-wallet"></i></p>
                <div className='address-container'>
                  <p>Wallet connected</p>
                  <p>{shortAddress(accountAddress.data)}</p>
                </div>
              </div>
              { lotterySuccess
              ? <>
                  <h1>Success</h1>
                  <h2 className="register-entry">
                    <i className="fas fa-wallet"></i>&nbsp;
                    Your lottery ticket has been registered!
                  </h2>
                  <p className='lottery-success'>Check your <Link to="/wallet">wallet page</Link> for updates and signup to our new newsletter for updates</p>
                </>
              : <>
                  <h1>Lastly, confirm your lottery ticket entry.</h1>
                  <h2 className="register-entry" onClick={playLottery}>
                    <i className="fas fa-wallet"></i>&nbsp;
                    Register your entry
                  </h2>
                  { lottery?.data?.minted && <p className='lottery-minted'>{lottery.data.minted} lottery tickets registered so far</p> }
                </>
              }
            </div>
          : <div className='connect-container'>
              <img src="/img/wallet/1.png" style={{margin: "100px 0 50px 0"}} width="100" height="100"/>
              <h1>Connect your wallet to get started</h1>
              <h2 className="connect-wallet" onClick={handleConnect}>
                <i className="fas fa-wallet"></i>&nbsp;
                Connect your wallet
              </h2>
            </div>
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}
export default Lottery;