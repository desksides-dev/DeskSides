const adminJournos = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ADMIN_JOURNOS':
            return action.payload;
        default:
            return state;
    }
};

export default adminJournos;