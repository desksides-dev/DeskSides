const adminBrands = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ADMIN_BRANDS':
            return action.payload;
        default:
            return state;
    }
};

export default adminBrands;