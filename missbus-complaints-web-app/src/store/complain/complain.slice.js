import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import DatabaseService from '../../services/DatabaseService'

import {
    uploadComplainPending,
    uploadComplainFulfilled,
    uploadComplainRejected,
    updateBusLineAction,
    updateBusTimeAction,
    updateComplainAction,
    updateFreeTextAction
} from './complain.actions'

export const uploadComplain = createAsyncThunk('complain/uploadComplain', async ({fullName="", phoneNumber=""}, {getState}) => {
    const {stationId} = getState().station
    const {complain, busLine, busTime, freeText} = getState().complain
    const {uid} = getState().user
    return DatabaseService.saveComplain(stationId, busLine, complain, busTime, uid, freeText, fullName, phoneNumber)

})


export const complainSlice = createSlice({
  name: 'complain',
  initialState: {
    loading: false,
    complain: null,
    busLine: null,
    busTime: null,
    freeText: "",
    docId: null
  },
  reducers: {
    updateBusLine: updateBusLineAction,
    updateBusTime: updateBusTimeAction,
    updateComplain: updateComplainAction,
    updateFreeText: updateFreeTextAction,
  },
  extraReducers(builder) {
    builder
        .addCase(uploadComplain.pending, uploadComplainPending)
        .addCase(uploadComplain.fulfilled, uploadComplainFulfilled)
        .addCase(uploadComplain.rejected, uploadComplainRejected)

  },
})

export const {
    updateBusLine,
    updateBusTime,
    updateComplain,
    updateFreeText
} = complainSlice.actions

export default complainSlice.reducer