import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as Location from "expo-location";
import { locationType } from "src/types";

// console.log(decodeURI('filters%5Bcommodity%5D=apple'))

const InitialState: { location: locationType } = {
  location: {
    district: "",
    state: "",
    country: "",
  },
};

export const getlocation = createAsyncThunk<locationType>("/getlocation", async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.log("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Balanced,
    timeInterval:10000
  });

  let revLocation = await axios.get("https://geocode.maps.co/reverse", {
    params: {
      lat: location.coords.latitude,
      lon: location.coords.longitude,
    },
    timeout: 3000,
  });

  let address = revLocation.status == 200 && revLocation.data.address;

  let locationObj = {
    district:address?.state_district,
    state:address?.state,
    country:address?.country
  }

  return locationObj;
});

export const LocationSlice = createSlice({
  name: "location",
  initialState: InitialState,
  reducers: {
    // setlocation: (state, {payload}) => {
    //   state.location = (payload)
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getlocation.fulfilled, (state, action) => {
      state.location = action.payload
    });
  },
});

// export const { setlocation } = LocationSlice.actions;

export default LocationSlice.reducer;
