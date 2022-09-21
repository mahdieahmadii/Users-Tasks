export function handleUsersReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, text: [...state.text, action.payload] };
        case "DELETE":
            console.log({ ...state, text: [...state.text.filter((item) => item.id !== action.payload)] });
            return { ...state, text: [...state.text.filter((item) => item.id !== action.payload)] }
        default:
            return state;
    }
}