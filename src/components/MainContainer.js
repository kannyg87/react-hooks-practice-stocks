import React from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer({ stock, handleAdd, portfolio, handleDelete,  isChecked, handleCheckboxChange, filterTypeStock }) {
  return (
    <div>
      <SearchBar handleCheckboxChange={handleCheckboxChange} isChecked={isChecked} filterTypeStock={filterTypeStock} />
      <div className="row">
        <div className="col-8">
          <StockContainer stock={stock} handleAdd={handleAdd} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleDelete={handleDelete } />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
