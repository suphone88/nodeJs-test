import { FETCH_STOCKS } from "../actions/types";

const initialState = {
  stocks: {},
};

export const stockReducer = (state = initialState, action) => {
  //console.log("Reducer Stocks >>", action.payload);
  switch (action.type) {
    case FETCH_STOCKS:
      console.log("Reducer Stock >>", action.payload);
      return { ...state, stocks: { ...action.payload } };

    default:
      return state;
  }
};

export default stockReducer;
