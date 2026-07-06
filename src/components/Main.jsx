import React, { useState } from "react";
import Products from "./Products";
import Navbar from "./Navbar";
import FilterSearch from "./FilterSearch";
import CartModal from "./CartModal";
import { products } from "../data/product";

function Main() {
  const [inputVal, setInputVal] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item,
        );
      }
      return [...prevCart, { ...product, amount: 1 }];
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(inputVal.toLowerCase()) ||
      product.brand.toLowerCase().includes(inputVal.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main>
      <Navbar totalItems={totalItems} onCartClick={() => setIsCartOpen(true)} />

      <FilterSearch
        inputVal={inputVal}
        setInputVal={setInputVal}
        setSelectedCategory={setSelectedCategory}
      />

      <Products products={filteredProducts} onAddToCart={addToCart} />

      {isCartOpen && (
        <CartModal cart={cart} onClose={() => setIsCartOpen(false)} />
      )}
    </main>
  );
}

export default Main;
