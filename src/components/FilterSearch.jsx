import React from "react";
import Input from "./Input";
import Dropdowin from "./Dropdowin";

function FilterSearch({ inputVal, setInputVal, setSelectedCategory }) {
  return (
    <section className="py-5">
      <div className="container flex items-center justify-between mx-auto px-4">
        <Input inputVal={inputVal} setInputVal={setInputVal} />
        <Dropdowin setSelectedCategory={setSelectedCategory} />
      </div>
    </section>
  );
}

export default FilterSearch;
