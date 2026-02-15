import { useEffect, useState } from "react";

import ProductListPresenter from "./ProductListPresenter";
import Error from "./common/Error";
import Loading from "./common/Loading";

const ProductListContainer = ({ userId }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterByCat, setFilterByCat] = useState(0);
  const [sortByPrice, setSortByPrice] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [filterByCat, sortByPrice]);

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const fetchUrl = fetchUrlOnFilterAndSort(filterByCat, sortByPrice);
      const response = await fetch(fetchUrl);
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setError("Something went wrong!");
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCategory = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/categories`,
      );
      const data = await response.json();
      setCategories(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchUrlOnFilterAndSort = (filter, sort) => {
    let url;
    if (
      // when category filer and price sort both active
      filter &&
      filter !== "0" &&
      sort &&
      sort !== "0"
    ) {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products?category=${filter}&sort=${sort}`;
    } else if (
      // when category filer is active and price sort not active
      filter &&
      filter !== "0" &&
      sort &&
      sort === "0"
    ) {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products?category=${filter}`;
    } else if (
      // when category filer not active and price sort is active
      filter &&
      filter === "0" &&
      sort &&
      sort !== "0"
    ) {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products?&sort=${sort}`;
    } else if (filter && filter !== "0") {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products?category=${filter}`;
    } else if (sort !== "0") {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products?sort=${sort}`;
    } else {
      url = `${import.meta.env.VITE_API_BASE_URL}/api/products`;
    }
    return url;
  };

  const handleCategoryChange = (event) => {
    setFilterByCat(event.target.value);
  };

  const handlePriceSort = (event) => {
    setSortByPrice(event.target.value);
  };

  const handleRetry = () => {
    fetchProducts();
  };

  if (isLoading) {
    <Loading message="Please wait..." />;
  }

  if (error) {
    <Error error={error} onRetry={handleRetry} />;
  }

  return (
    <ProductListPresenter
      products={products}
      categories={categories}
      filterByCat={filterByCat}
      sortByPrice={sortByPrice}
      onCategoryChange={handleCategoryChange}
      onPriceSort={handlePriceSort}
    />
  );
};

export default ProductListContainer;
