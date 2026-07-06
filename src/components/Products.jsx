import ProdactCard from "./ProdactCard";

function Products({ products, onAddToCart }) {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {products.map((prod) => (
          <ProdactCard key={prod.id} product={prod} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
export default Products;
