import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type MobileMenuState = {
  isMenuOpen: boolean;
};

export const mobileMenuSlice = createSlice({
  name: "mobile-menu",
  initialState: {
    isMenuOpen: false,
  } as MobileMenuState,
  reducers: {
    mobileMenuClicked: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const selectIsMenuOpen = (state: RootState) =>
  state.mobileMenu.isMenuOpen;

export const { mobileMenuClicked } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
