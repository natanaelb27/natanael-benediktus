import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type CounterState = {
  count: number;
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  } as CounterState,
  reducers: {
    increment: (state, { payload }) => {
      state.count += payload;
      // return { count: state.count + action.payload };
    },
    decrement: (state, { payload }) => {
      state.count -= payload;
      // return { count: state.count - action.payload };
    },
  },
});

export const selectCount = (state: RootState) => state.counter.count;

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
