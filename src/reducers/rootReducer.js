const initState = {
    card: "Then came the night of the first falling star.",
    fontSize: 20,
    data: {}
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_CARD':
            return {
                card: action.change,
                fontSize: state.fontSize,
                data: state.data
            };
        case 'UPDATE_FONT_DATA':
            return {
                card: state.card,
                fontSize: state.fontSize,
                data: action.fontData
            };
        case 'UPDATE_FONT_SIZE':
            return {
                card: state.card,
                fontSize: action.size,
                data: state.data
            }
        default:
            return state;
    }
}

export default rootReducer;