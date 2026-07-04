import React from "react";
import Input from "./Input";
import Dropdowin from "./Dropdowin";
function FilterSearch() {
  return (
    <section className="py-5 ">
      <div className="container flex items-center ">
        <Input />
        <Dropdowin />
      </div>
    </section>
  );
}

export default FilterSearch;
