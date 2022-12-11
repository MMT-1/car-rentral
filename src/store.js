import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./features/userSlice"

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
})

export default store
