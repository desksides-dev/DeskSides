const brandJournalistsReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_BRAND_JOURNALISTS':
            return action.payload;
        default: 
            return state;
    }
}

export default brandJournalistsReducer;