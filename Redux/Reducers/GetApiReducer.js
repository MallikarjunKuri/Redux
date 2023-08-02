
export default GetApiReducer= (state = [], action) => {
    switch (action.type) {
        case 'GET_API':
            return action.payload;
        default:
            return state;
    }
};
