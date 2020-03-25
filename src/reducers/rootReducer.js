const initState = {
    card: "Then came the night of the first falling star.",
    data: {}
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_CARD':
            return {
                card: action.change,
                data: state.data
            };
        case 'UPDATE_FONT_DATA':
            return {
                card: state.card,
                data: action.fontData
            };
        default:
            return state;
    }
}

export default rootReducer;