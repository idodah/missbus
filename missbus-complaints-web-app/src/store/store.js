import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import stationReducer from './station/station.slice'
import complainReducer from './complain/complain.slice'
import userReducer from './user/user.slice'


export const rootReducer = combineReducers({
  station: stationReducer,
  complain: complainReducer,
  user: userReducer,
});

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: rootReducer,
})