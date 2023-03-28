import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../actions";

function Stocks() {
  const stocks = useSelector((state) => state.stocks);

  const dispatch = useDispatch();
  console.log(stocks);
  //const [stocks, setStocks] = useState({});
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
        {/* <ul>
          {stocks.stocks &&
            stocks.stocks.map((stock, index) => {
              return <li key={stock._id}>{stock.code}</li>;
            })}
        </ul> */}
      </div>
      <div>
        {Array.isArray(stocks)
          ? stocks.map((element) => {
              return <h2>{element.name}</h2>;
            })
          : null}
      </div>
    </>
  );
}

export default Stocks;
