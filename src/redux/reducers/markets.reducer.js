const marketsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MARKETS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // publications will be on the root reducer at:
  export default marketsReducer;