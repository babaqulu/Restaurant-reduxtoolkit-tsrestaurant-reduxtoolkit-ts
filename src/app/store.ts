import { configureStore } from "@reduxjs/toolkit"
import reservationReducer from "../features/reservationSlice"
import customersReducer from "../features/customersSlice"



export const store = configureStore({
  reducer:{
    reservations: reservationReducer,
    customers: customersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch