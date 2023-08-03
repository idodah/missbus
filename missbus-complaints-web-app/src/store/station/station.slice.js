import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import DatabaseService from '../../services/DatabaseService'

import {
  fetchStationPending,
  fetchStationFulfilled,
  fetchStationRejected,
} from './station.actions'

export const fetchStation = createAsyncThunk('station/fetchStation', async ({stationId}, {_}) => {
      const stationData = await DatabaseService.getStationData(stationId)
      const stationLines = await DatabaseService.getStationLines(stationId)
      return {stationData: stationData, stationLines: stationLines}
  })


export const stationSlice = createSlice({
  name: 'station',
  initialState: {
    loading: false,
    stationId: null,
    stationName: null,
    stationLines: null,
  },
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchStation.pending, fetchStationPending)
      .addCase(fetchStation.fulfilled, fetchStationFulfilled)
      .addCase(fetchStation.rejected, fetchStationRejected)

  },
})

// export const {
// } = stationSlice.actions

export default stationSlice.reducer