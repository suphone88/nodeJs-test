import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../actions";

function Stocks() {
  const stocks = useSelector((state) => state.stocks);
  console.log(stocks);
  const dispatch = useDispatch();
  //console.log(stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  if (!stocks) {
    return "Loading ...";
  } else {
    return (
      <>
        <h3> Stocks List !!</h3>
        <ul>
          {stocks.stocks.data &&
            stocks.stocks.data.map((stock) => {
              return (
                <li key={stock._id}>
                  Code No:{stock.code} - Name:{stock.name} - Price:{stock.price}
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}

export default Stocks;
