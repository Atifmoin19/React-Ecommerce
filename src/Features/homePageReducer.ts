import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  name: string;
}
const initialState: IState = {
  name: "",
};

const HomePageSlice = createSlice({
  name: "HomePage",
  initialState: initialState,
  reducers: {
    updateName: (state, action: PayloadAction<any>) => {
      state.name = action.payload;
    },
  },
});

const { reducer } = HomePageSlice;

const { updateName } = HomePageSlice.actions;

export { reducer as HomePageReducer, updateName };
