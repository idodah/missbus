


export const setUserAction = (state, action) => {

    if (action.payload !== null) {
        state.uid = action.payload.uid

    }
}
