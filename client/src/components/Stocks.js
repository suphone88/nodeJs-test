import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../actions/index";

function Stocks() {
  const stocks = useSelector((state) => state.stocks);

  const dispatch = useDispatch();
  console.log(stocks);

  useEffect(() => {
    dispatch(fetchStocks(stocks));
  }, [dispatch]);

  if (!stocks) {
    return "Loading ...";
  }
  return (
    <>
      <h3> Stocks List !!</h3>
      <div>
        <ul>
          {stocks.stocks &&
            stocks.stocks.map((stock, index) => {
              return <li key={stock._id}>{stock.code}</li>;
            })}
        </ul>
      </div>
    </>
  );
}

export default Stocks;
