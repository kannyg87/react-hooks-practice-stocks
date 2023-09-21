import React from "react";

function Stock({ s, handleClick}) {

  return (
    <div>
      <div className="card" id={s.id}  onClick={()=>handleClick(s)} >
        <div className="card-body">
          <h5 className="card-title">{s.name}</h5>
          <p className="card-text">{`${s.ticker} : ${s.price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
