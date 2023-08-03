import { createSlice } from '@reduxjs/toolkit'
import {
  setUserAction,

} from './user.actions'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    isLogged: false,
  },
  reducers: {
    setUser: setUserAction
  },
//   extraReducers(builder) {
//     builder
//   },
})

export const {
  setUser
} = userSlice.actions

export default userSlice.reducer