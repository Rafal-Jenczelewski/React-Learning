export const changeName = name => {
    return {
        type: "CHANGE_NAME",
        payload: name
    }
};

export const addNote = note => {
    return {
        type: "ADD_NOTE",
        payload: note
    }
}