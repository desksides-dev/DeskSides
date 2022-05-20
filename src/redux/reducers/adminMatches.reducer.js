const adminMatchesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ADMIN_MATCHES':
            return action.payload;
        default:
            return state;
    }
};

export default adminMatchesReducer;
