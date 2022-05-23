const adminItemReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ADMIN_ITEM':
            return action.payload;
        default:
            return state;
    }
};

export default adminItemReducer;