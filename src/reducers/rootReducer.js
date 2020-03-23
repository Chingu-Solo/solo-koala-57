const initState = {
    card: "Then came the night of the first falling star."
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_CARD':
            return {
                card: action.change
            };
        default:
            return state;
    }
}

export default rootReducer;