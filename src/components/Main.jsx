import react, { useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import FilterSearch from "./FilterSearch";

function Main() {
  let [inputVal, setInputVal] = useState("");
  console.log(inputVal);
  return (
    <main>
      <Navbar />
      <FilterSearch setInputVal={setInputVal} />
      <Products />
    </main>
  );
}

export default Main;
