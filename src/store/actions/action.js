import { createAction } from '@reduxjs/toolkit';

export const setSliderValue = createAction('SET_SLIDER_VALUE', (value) => ({
  payload: value
}));