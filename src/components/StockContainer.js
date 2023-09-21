import React from "react";
import Stock from "./Stock";

function StockContainer({stock, handleAdd}) {
  return (
    <div>
      <h2>Stocks</h2>
      {/* render stock list here*/}
      {
        stock.map(s => <Stock key={s.id } s={ s} handleClick={handleAdd} />)
      }
    </div>
  );
}

export default StockContainer;
