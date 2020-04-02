const initState = {
    card: "Then came the night of the first falling star.",
    fontSize: 20,
    data: {},
    search: ""
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_CARD':
            return {
                card: action.change,
                fontSize: state.fontSize,
                data: state.data,
                search: state.search
            };
        case 'UPDATE_FONT_DATA':
            return {
                card: state.card,
                fontSize: state.fontSize,
                data: action.fontData,
                search: state.search
            };
        case 'UPDATE_FONT_SIZE':
            return {
                card: state.card,
                fontSize: action.size,
                data: state.data,
                search: state.search
            }
        case 'UPDATE_SEARCH':
            return {
                card: state.card,
                fontSize: state.fontSize,
                data: state.data,
                search: action.search
            }
        default:
            return state;
    }
}

export default rootReducer;