import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, handleDelete}) {

  return (
    <div>
      <h2>My Portfolio</h2>
      {//render your portfolio stocks here 
      }
      {portfolio.map(port => <Stock key={port.id} s={port} handleClick={handleDelete} />)}

    </div>
  );
}

export default PortfolioContainer;
