const initialState = {
  value: 1
};

const sliderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SLIDER_VALUE':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

export default sliderReducer;