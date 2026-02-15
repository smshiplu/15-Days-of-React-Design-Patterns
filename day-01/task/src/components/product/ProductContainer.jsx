import Filter from "./Filter";
import ProductList from "./ProductList";

const ProductContainer = ({
  products,
  categories,
  filterByCat,
  sortByPrice,
  onAddToCart,
  onCategoryChange,
  onPriceSort,
}) => {
  return (
    <section className="bg-gray-800 max-w-screen-xl w-full mx-auto mt-20 p-4 rounded-lg">
      <Filter
        categories={categories}
        filterByCat={filterByCat}
        sortByPrice={sortByPrice}
        onCategoryChange={onCategoryChange}
        onPriceSort={onPriceSort}
      />
      <ProductList products={products} onAddToCart={onAddToCart} />
    </section>
  );
};

export default ProductContainer;
