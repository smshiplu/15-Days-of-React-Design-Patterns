import ProductCard from "./ProductCard";

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="cards w-full min-h-full flex flex-col md:flex-row flex-wrap items-center justify-evenly gap-4">
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
    </div>
  );
};

export default ProductList;
