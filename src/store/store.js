import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./reducers/sliderReducer";

const store = configureStore({
  reducer: {
    slider: sliderReducer
  }
});

export default store;