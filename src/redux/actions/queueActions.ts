// actions/queueActions.ts
import { Dispatch } from 'redux';

export enum QueueActionTypes {
  ACCEPT_BID = 'ACCEPT_BID',
}

interface AcceptBidAction {
  type: QueueActionTypes.ACCEPT_BID;
  payload: {
    requestId: number;
  };
}

export type QueueAction = AcceptBidAction;

export const acceptBid = (requestId: number) => {
  return (dispatch: Dispatch<QueueAction>) => {
    // Perform any asynchronous operation if needed
    // For simplicity, I'm dispatching the action directly
    dispatch({
      type: QueueActionTypes.ACCEPT_BID,
      payload: {
        requestId,
      },
    });
  };
};

