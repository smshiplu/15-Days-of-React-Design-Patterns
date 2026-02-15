const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card bg-neutral-primary-soft block w-full max-w-xs  p-3 md:p-6 border border-neutral-600 hover:border-white transition duration-300 border-default rounded-lg shadow-xs ">
      <img
        className="rounded w-full "
        src={product.imageUrl || "/placeholder.jpg"}
        alt={product.name}
      />
      <h5 className="h-16 mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading line-clamp-2">
        {product.name}
      </h5>
      <p className="mb-6 text-body h-20 line-clamp-3 overflow-hidden">
        {product.description}
      </p>
      <p className="mb-6 text-body h-6 overflow-hidden">${product.price}</p>
      <button
        onClick={() => onAddToCart(product.id)}
        className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded cursor-pointer"
      >
        Add to Cart
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
          />
        </svg>
      </button>
    </div>
  );
};

export default ProductCard;
