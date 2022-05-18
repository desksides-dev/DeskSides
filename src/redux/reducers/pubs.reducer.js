const pubsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PUBS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // publications will be on the root reducer at:
  // state.pubs
  export default pubsReducer;