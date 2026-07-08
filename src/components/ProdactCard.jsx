import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function ProdactCard({ product, onAddToCart }) {
  const {
    id,
    name,
    category,
    brand,
    price,
    discount,
    quantity,
    rating,
    reviews,
    image,
    status,
  } = product;

  const discountedPrice = Math.floor(price - (price * discount) / 100);

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl duration-300">
      <Link to={`/product/${id}`} className="cursor-pointer group">
        <figure className="h-60 bg-base-200 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover group-hover:scale-105 duration-300"
          />
        </figure>
      </Link>

      <div className="card-body">
        <div className="flex items-center justify-between">
          <span className="badge badge-primary">{category}</span>

          <span
            className={`badge ${
              status === "Mavjud" ? "badge-success" : "badge-error"
            }`}
          >
            {status}
          </span>
        </div>

        <Link to={`/product/${id}`}>
          <h2 className="card-title hover:text-primary transition-colors cursor-pointer">
            {name}
          </h2>
        </Link>

        <p className="text-sm opacity-70">{brand}</p>

        <div className="flex items-center gap-2 text-sm">
          ⭐️ {rating}
          <span className="opacity-60">({reviews} reviews)</span>
        </div>

        <div className="mt-2">
          <p className="text-2xl font-bold text-primary">
            {discountedPrice.toLocaleString()} so'm
          </p>

          <div className="flex items-center gap-2">
            <p className="line-through opacity-50">
              {price.toLocaleString()} so'm
            </p>

            <span className="badge badge-error">-{discount}%</span>
          </div>
        </div>

        <div className="mt-2 flex justify-between text-sm">
          <span>Omborda: {quantity} ta</span>
        </div>

        <div className="card-actions mt-4">
          <Button
            text={"Buy"}
            variant="accent"
            onClick={() => onAddToCart(product)}
          />
        </div>
      </div>
    </div>
  );
}

export default ProdactCard;
