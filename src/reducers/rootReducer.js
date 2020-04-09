const initState = {
    card: "Then came the night of the first falling star.",
    fontSize: 20,
    data: {},
    search: "",
    mode: false,
    grid: false
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'UPDATE_SAMPLE_TEXT':
            let card = action.change;
            return {...state, card};
        case 'UPDATE_FONT_DATA':
            let data = action.fontData;
            return {...state, data};
        case 'UPDATE_FONT_SIZE':
            let fontSize = action.size;
            return {...state, fontSize}
        case 'UPDATE_SEARCH':
            let search = action.search;
            return {...state, search}
        case 'UPDATE_MODE':
            let mode = !state.mode;
            return {...state, mode}
        case 'UPDATE_GRID':
            let grid = !state.grid;
            return {...state, grid}
        default:
            return state;
    }
}

export default rootReducer;