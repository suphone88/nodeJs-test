import api from "../apis/api";

import { FETCH_STOCKS } from "./types";

export const fetchStocks = () => async (dispatch) => {
  const response = await api.get("/stock");
  console.log("Actions Stocks >>", response.data);
  dispatch({ type: FETCH_STOCKS, payload: response.data });
};
