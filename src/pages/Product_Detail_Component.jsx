import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/product";
import Navbar from "../components/Navbar";

export default function Product_Detail_Component() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-10 text-center text-error font-bold text-xl">
          Mahsulot topilmadi!
        </div>
      </>
    );
  }

  const hasDiscount = product.discount > 0;
  const finalPrice = hasDiscount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <>
      <Navbar />

      <div className="h-full bg-base-200 py-10 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-5xl mx-auto bg-base-100 shadow-xl rounded-2xl p-6 lg:p-10">
          <div className="text-sm breadcrumbs mb-6 text-base-content/70">
            <ul>
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <span className="text-base-content/50">{product.category}</span>
              </li>
              <li className="text-primary font-medium">{product.name}</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center bg-white p-6 rounded-2xl border border-base-200 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-96 object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-4">
              <span className="badge badge-primary uppercase font-semibold p-3 text-xs">
                {product.brand}
              </span>

              <h1 className="text-3xl font-extrabold text-base-content">
                {product.name}
              </h1>

              <div className="space-y-1">
                {hasDiscount && (
                  <p className="text-sm text-base-content/50 line-through">
                    {product.price.toLocaleString()} so'm
                  </p>
                )}
                <p className="text-2xl font-black text-error">
                  {finalPrice.toLocaleString()} so'm
                </p>
              </div>

              <div className="divider"></div>

              <div>
                <h3 className="font-bold text-lg mb-1">Mahsulot haqida:</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {product.description ||
                    "Ushbu mahsulot haqida qo'shimcha ma'lumot mavjud emas."}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="text-sm font-medium text-base-content/70">
                  Holati:
                </span>
                <span className="badge badge-success text-white font-bold p-3">
                  Mavjud
                </span>
              </div>

              <div className="pt-4">
                <Link
                  to="/"
                  className="btn btn-outline btn-primary w-full sm:w-auto"
                >
                  ← Bosh sahifaga qaytish
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
