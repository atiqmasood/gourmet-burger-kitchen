export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES_DATA':
            if (!action.error) {
                return  { ...state, list: action.payload };
            }
            break;
        default:
    }
    return state;
};
