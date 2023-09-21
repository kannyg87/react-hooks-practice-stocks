import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stock, setStock] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [isChecked, setIsChecked] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStock(data));
  }, []);

  function handleAdd(obj) {
    setPortfolio([...portfolio, obj]);
  }

  function handleDelete(obj) {
    setPortfolio(portfolio.filter((p) => p.id !== obj.id));
  }

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.value);

    if (e.target.value === "Alphabetically") {
        const sort = [...stock].sort((a, b) => a.name.localeCompare(b.name));
        setStock(sort);
    } else if (e.target.value === "Price") {
        const sort2 = [...stock].sort((a, b) => a.price - b.price);
        setStock(sort2);
    }
};

  const filterTypeStock = (e) => {
      const res = [...stock].filter(st => st.type === e.target.value )
      console.log(res)
    setStock(res)

  }

  return (
    <div>
      <Header />
      <MainContainer
        stock={stock}
        handleAdd={handleAdd}
        portfolio={portfolio}
        handleDelete={handleDelete}
        handleCheckboxChange={handleCheckboxChange}
        isChecked={isChecked}
        filterTypeStock={filterTypeStock}
      />
    </div>
  );
}
export default App;
