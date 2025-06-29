// client/src/actions/chatActions.js
export const sendMessage = (message) => {
    return {
      type: 'SEND_MESSAGE',
      payload: message
    };
  };
  
  export const receiveMessage = (message) => {
    return {
      type: 'RECEIVE_MESSAGE',
      payload: message
    };
  };
// client/src/reducers/chatReducer.js
const initialState = {
    messages: []
  };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEND_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      case 'RECEIVE_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload]
        };
      default:
        return state;
    }
  };
  
  export default chatReducer;
    