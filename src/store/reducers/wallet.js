import { getType } from 'typesafe-actions';
import * as actions from '../actions';
import { initEntityState, entityLoadingStarted, entityLoadingSucceeded, entityLoadingFailed } from '../utils';

export const defaultState = {
  connected: initEntityState(false, false),
  accountAddress: initEntityState('', false),
  netId: initEntityState(0, false)
};

const states = (state = defaultState, action) => {
  switch (action.type) {
    
    case getType(actions.connectWallet.request):
      return { 
        ...state, 
        connected: entityLoadingStarted(state.connected, action.payload), 
        accountAddress: entityLoadingStarted(state.accountAddress, action.payload)
      };
    case getType(actions.connectWallet.success):
      return { 
        ...state, 
        connected: entityLoadingSucceeded(state.connected, true), 
        accountAddress: entityLoadingSucceeded(state.accountAddress, action.payload)
      };
    case getType(actions.connectWallet.failure):
      return { 
        ...state, 
        connected: entityLoadingFailed(state.connected), 
        accountAddress: entityLoadingFailed(state.accountAddress)
      };

    case getType(actions.getNetId.request):
      return { 
        ...state, 
        netId: entityLoadingStarted(state.connected, action.payload), 
      };
    case getType(actions.getNetId.success):
      return { 
        ...state, 
        netId: entityLoadingSucceeded(state.connected, action.payload)
      };
    case getType(actions.getNetId.failure):
      return { 
        ...state, 
        netId: entityLoadingFailed(state.netId)
      };
    
    default:
      return state;
  }
};

export default states;
