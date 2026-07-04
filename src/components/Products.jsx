import { products } from "../data/product";
import ProdactCard from "./ProdactCard";

function Products() {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {products &&
          products.map((prod) => {
            return <ProdactCard key={prod.id} product={prod} />;
          })}
      </div>
    </section>
  );
}

export default Products;
