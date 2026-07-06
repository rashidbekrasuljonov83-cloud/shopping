import React from "react";
import { products } from "../data/product";
import { v4 as uuidv4 } from "uuid";
function Dropdowin({ setSelectedCategory }) {
  let arr = [...new Set(products.map((item) => item.category))];

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        category
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li key={uuidv4()}>
          <a type="button" onClick={() => setSelectedCategory("All")}>
            All
          </a>
        </li>
        {arr.map((item) => {
          return (
            <li key={uuidv4()}>
              <a type="button" onClick={() => setSelectedCategory(item)}>
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdowin;
