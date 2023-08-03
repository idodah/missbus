

export const uploadComplainPending = (state, action) => {
    state.loading = true
}
export const uploadComplainFulfilled = (state, action) => {
    state.complainId = null
    state.busLine = null
    state.busTime = null
    state.freeText = ""
    state.docId = action.payload
    state.loading = false
}

export const uploadComplainRejected = (state, action) => {
    state.complain = null
    state.busLine = null
    state.busTime = null
    state.freeText = ""
    state.loading = false
}

export const updateBusLineAction = (state, action) => {
    state.busLine = action.payload
}


export const updateBusTimeAction = (state, action) => {
    state.busTime = action.payload
    console.log(state.busLine)
}


export const updateComplainAction = (state, action) => {
    state.complain = action.payload
}

export const updateFreeTextAction = (state, action) => {
    state.freeText = action.payload
}
