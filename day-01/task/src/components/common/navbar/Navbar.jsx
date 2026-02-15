import Cart from "./Cart";

const Navbar = ({
  onToggleDropdown,
  productInCart,
  toggleDropdown,
  onDecreaseQty,
  onInCreaseQty,
  onDeleteProduct,
}) => {
  return (
    <nav className="bg-slate-900/90 fixed w-full z-20 top-0 start-0 border-default">
      <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            className="w-10 h-10 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            ShopMate
          </span>
        </a>
        <ul className="flex flex-wrap font-medium p-4 md:p-0 mt-4 border-0 border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
          <li>
            <button
              onClick={onToggleDropdown}
              className="z-10 flex items-center w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 cursor-pointer relative"
            >
              {productInCart.length > 0 && (
                <div className="product-count w-6 h-6 bg-rose-700 rounded-full absolute right-0 top-0 md:-right-3 md:-top-3">
                  {productInCart.length}
                </div>
              )}
              Cart
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
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
            </button>
            {productInCart.length > 0 && toggleDropdown && (
              <Cart
                productInCart={productInCart}
                onDecreaseQty={onDecreaseQty}
                onInCreaseQty={onInCreaseQty}
                onDeleteProduct={onDeleteProduct}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
