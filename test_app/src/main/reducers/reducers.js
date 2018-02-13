export const name = (state = "", action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.payload;
        default:
            return state;
    }
};

export const notes = (state = ["Check this out", "Learn React"], action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return [...state, action.payload];
        default:
            return state;
    }
}

