import { Canceler } from '../../../core/axios';
import * as actions from '..';
import Web3 from 'web3';

export var web3 = null;

const getAccountsCallback = (dispatch) => (error, accounts) => {
  if (!error) {
    const accountAddress = accounts.length === 0 ? null : accounts[0];
    dispatch(actions.connectWallet.success(accountAddress));

    dispatch(getNetId());
  }
};

export const walletConnect = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  
  dispatch(actions.connectWallet.request(Canceler.cancel));

  try {
    
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
      try {
        // Request account access if needed
        await window.ethereum.enable();
        web3.eth.getAccounts(getAccountsCallback(dispatch));
      } catch (error) {
        throw error;
      }
    } else if (window.web3) { // Legacy dapp browsers...
      web3 = new Web3(window.web3.currentProvider);
      web3.eth.getAccounts(getAccountsCallback(dispatch));
    }

  } catch (err) {
    dispatch(actions.connectWallet.failure(err));
  }
};

export const getNetId = () => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
    
  dispatch(actions.getNetId.request(Canceler.cancel));

  try {
    
    var netId = await web3.eth.net.getId()
    
    dispatch(actions.getNetId.success(netId));
  } catch (err) {
    dispatch(actions.getNetId.failure(err));
  }
};
