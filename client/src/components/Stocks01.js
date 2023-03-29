import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../actions";

function Stocks() {
  const stocks = useSelector((state) => state.stocks);

  const dispatch = useDispatch();
  console.log(stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  // if (!stocks) {
  //   return "Loading ...";
  // } else {
  //   return <div>stock</div>;
  // }

  return (
    <>
      <h3> Stocks List !!</h3>
      {stocks ? stocks.map((data) => <div>{data.name}</div>) : null}
      <div>
        {/* <ul>
          {stocks.stocks &&
            stocks.stocks.map((stock, index) => {
              return <li key={stock._id}>{stock.code}</li>;
            })}
        </ul> */}
      </div>
      <div>
        {/* {Array.isArray(stocks)
          ? stocks.map((element) => {
              return <h2>{element.name}</h2>;
            })
          : null} */}
      </div>
    </>
  );
}

export default Stocks;
