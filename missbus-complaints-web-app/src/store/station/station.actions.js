import { getDateFromHours } from "../../utils"


export const fetchStationPending = (state, action) => {
    state.loading = true
}
export const fetchStationFulfilled = (state, action) => {
    const stationData = action.payload.stationData
    const lines = action.payload.stationLines
    state.stationId = stationData.station_id
    state.stationName = stationData.station_name
    
    for (const line of Object.keys(lines)) {
        const arrival_times = []
        for (const arrive of lines[line].arrival_times) {
            arrival_times.push(getDateFromHours(arrive))
        }
        lines[line].arrival_times = arrival_times
    }
    state.stationLines = lines
    state.loading = false
}

export const fetchStationRejected = (state, action) => {
    console.log(action.error.message)
    state.loading = false
}