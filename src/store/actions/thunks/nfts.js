import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';
import api from '../../../core/api';
import { web3 } from './wallet';

const lotteryABI = require("../../../core/nft/lottery-abi.json");
const lotteryAddress = "0x234DE0aE9236A2a02D34527114A3BA4D98e4BAD7";

export const fetchNftsBreakdownNoThunk = async (authorId) => {

  try {
    let filter = authorId ? 'author='+authorId : '';
    const { data } = await Axios.get(`${api.baseUrl}${api.nfts}?${filter}`, {
      cancelToken: Canceler.token,
      params: {}
    });
    return [ data, null ]
  } catch (err) {
    return [ null, err ]
  }
};

export const fetchNftsBreakdown = (authorId) => async (dispatch, getState) => {
  
  //access the state
  const state = getState();
  console.log(state);

  dispatch(actions.getNftBreakdown.request(Canceler.cancel));

  try {
    let filter = authorId ? 'author='+authorId : '';
    const { data } = await Axios.get(`${api.baseUrl}${api.nfts}?${filter}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftBreakdown.success(data));
  } catch (err) {
    dispatch(actions.getNftBreakdown.failure(err));
  }
};

export const fetchNftShowcase = () => async (dispatch) => {

  dispatch(actions.getNftShowcase.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.nftShowcases}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftShowcase.success(data));
  } catch (err) {
    dispatch(actions.getNftShowcase.failure(err));
  }
};

export const fetchNftDetail = (nftId) => async (dispatch) => {

  dispatch(actions.getNftDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.nfts}/${nftId}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getNftDetail.success(data));
  } catch (err) {
    dispatch(actions.getNftDetail.failure(err));
  }
};

export const fetchLottery = () => async (dispatch) => {

  dispatch(actions.getLotteryDetail.request(Canceler.cancel));

  try {
    const { data } = await Axios.get("https://test.remprotocol.com/api/lottery", {
      cancelToken: Canceler.token,
      params: {}
    });
    const minted = data["minted"];
    const started = data["started"];
    
    dispatch(actions.getLotteryDetail.success({minted, started}));
  } catch (err) {
    dispatch(actions.getLotteryDetail.failure(err));
  }
};

export const fetchLotteryStatus = (accountAddress) => async (dispatch) => {

  dispatch(actions.getLotteryStatus.request(Canceler.cancel));

  try {
    const contract = new web3.eth.Contract(lotteryABI, lotteryAddress)
    const isTicketExist = await contract.methods.isTicketExist(accountAddress).call({ from: accountAddress });
    const isTicketClaimed = await contract.methods.isTicketClaimed(accountAddress).call({ from: accountAddress });
        
    dispatch(actions.getLotteryStatus.success({
      lotteryStacked: isTicketExist,
      lotteryClaimed: isTicketClaimed
    }));
  } catch (err) {
    console.log(err);
    dispatch(actions.getLotteryStatus.failure(err));
  }
};

export const stake = (accountAddress) => async (dispatch) => {
  try {
      const contract = new web3.eth.Contract(lotteryABI, lotteryAddress)
      await contract.methods.play().send({ from: accountAddress });

      dispatch(fetchLotteryStatus(accountAddress));
  } catch(error) {
    console.log(error);
  }
};

export const claim = (accountAddress) => async (dispatch) => {
  try {
    const contract = new web3.eth.Contract(lotteryABI, lotteryAddress)
    await contract.methods.claim().send({ from: accountAddress });

    dispatch(fetchLotteryStatus(accountAddress));
  } catch(error) {
    console.log(error);
  }
}