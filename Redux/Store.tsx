import { configureStore } from "@reduxjs/toolkit";
import  commodityReducer  from "./CommoditySlice";
import locationReducer from "./LocationSlice"

export const store = configureStore({
    reducer:{
        commodities:commodityReducer,
        location:locationReducer
    }
})

// export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd00000109c18762ff69438045db2c7a3e765de5&format=json
// 579b464db66ec23bdd00000109c18762ff69438045db2c7a3e765de5
// https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=579b464db66ec23bdd00000109c18762ff69438045db2c7a3e765de5&format=json&filters%5Bstate%5D=Haryana&filters%5Barrival_date%5D=11%2F07%2F2023
