import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { axiosClient } from "../src/config/axiosConfig";
import { categoryList } from "../src/utils/Categorylist";
import { intialStateType, locationType, record} from "../src/types";

// console.log(decodeURI('filters%5Bcommodity%5D=apple'))
// console.log(
//   decodeURI("filters%5Bstate%5D=Gujarat&filters%5Bdistrict%5D")
// );

// This is the initial state of the slice
const intialState:intialStateType = {
  isLoading:true,
  records:[],
};

// `createAsyncThunk` is a generic function.
// We can use the first type-parameter to tell what type will be returned as a result.
// The second type-parameter in `createAsyncThunk` tells what argument takes the function inside:
// The third type-parameter is an object with:
// `{dispatch?, state?, extra?, rejectValue?}`` fields.

// `extra` is useful when we need to pass
// some static data to the request function,
// like jwt-token or HTTP-headers.

// `rejectValue` is useful when we need to type
// possible errors.

export const fetchRecords = createAsyncThunk<
  record[],
  {type?:string,location?:locationType},
  { rejectValue: string }
>("commodities/fetch", async ({type,location}, thunkApi) => {
  // console.log(type)
  console.log(location)
  // console.log(commo)
  // The second argument, `thunkApi`, is an object
  // that contains all those fields
  // and the `rejectWithValue` function:
  const response = await axiosClient.get("", {
    params: { "filters[state]": "Kerala", "filters[district]": "Alappuzha" },
  });
  const records = response.data.records;
  const newList = []
  const list = categoryList.find(obj => obj.category == type).list
  // console.log(list)
  list.map((item) => {
    records.length > 0 &&
      records.map((rec: record,index: number) => {
        if(rec.commodity == item.name){
          rec.recordId = index+1
          rec.imgSrc = item.img
          rec.url = item.name
          newList.push(rec)
        }
      });
  });
  // console.log(newList)
  return newList;
});

export const commoditySlice = createSlice({
  name: "commodities",
  initialState: intialState,
  reducers: {
    // reset: (state)=>{
    //   state.isLoading = true
    // }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRecords.fulfilled,
      (state, { payload }: PayloadAction<record[]>) => {
        state.isLoading = false
        state.records = payload;
      }
    );
    builder.addCase(fetchRecords.pending,(state)=>{
      state.isLoading = true
      state.records = []
    })
  },
});

// Action creators are generated for each case reducer function
// export const { reset } = commoditySlice.actions;

export default commoditySlice.reducer;
