import { QueueActionTypes } from "../actions/queueActions";


  const initialState: any = {
    queue: [],
  };
  
  const queueReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case QueueActionTypes.ACCEPT_BID: {
        const updatedQueue = state.queue.filter((request: any) => request.id !== action.payload.requestId);
        return {
          ...state,
          queue: updatedQueue,
        };
      }
      default:
        return state;
    }
  };
  
  export default queueReducer;
  