export const name = (state = "", action) => {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.payload;
    }

    return state;
};