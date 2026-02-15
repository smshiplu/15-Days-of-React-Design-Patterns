const Filter = ({
  categories,
  filterByCat,
  sortByPrice,
  onCategoryChange,
  onPriceSort,
}) => {
  return (
    <form className="w-full flex flex-wrap gap-4 items-center justify-center md:justify-between mb-6 py-6 text-center md:text-left">
      <div>
        <label
          htmlFor="categoryFilter"
          className="flex items-center gap-1 mb-2.5 text-sm font-medium text-heading"
        >
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
              strokeWidth="2"
              d="M18.796 4H5.204a1 1 0 0 0-.753 1.659l5.302 6.058a1 1 0 0 1 .247.659v4.874a.5.5 0 0 0 .2.4l3 2.25a.5.5 0 0 0 .8-.4v-7.124a1 1 0 0 1 .247-.659l5.302-6.059c.566-.646.106-1.658-.753-1.658Z"
            />
          </svg>
          Filter by Category
        </label>
        <select
          onChange={onCategoryChange}
          value={filterByCat}
          name="categoryFilter"
          id="categoryFilter"
          className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-neutral-600 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg"
        >
          <option className="text-black" value="0">
            Select One
          </option>
          {categories &&
            categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
                className="text-black"
              >
                {category.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="priceSort"
          className="flex items-center gap-1 mb-2.5 text-sm font-medium text-heading"
        >
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
              d="M7 4v16M7 4l3 3M7 4 4 7m9-3h6l-6 6h6m-6.5 10 3.5-7 3.5 7M14 18h4"
            />
          </svg>
          Sort by Price
        </label>
        <select
          onChange={onPriceSort}
          value={sortByPrice}
          name="priceSort"
          id="priceSort"
          className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-neutral-600 text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body rounded-lg"
        >
          <option className="text-black" value="0">
            Select One
          </option>
          <option value="price-low" className="text-black">
            Low to high
          </option>
          <option value="price-high" className="text-black">
            High to low
          </option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
