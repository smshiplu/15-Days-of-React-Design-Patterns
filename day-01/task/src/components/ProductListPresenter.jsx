import { useState } from "react";
import Navbar from "./common/navbar/Navbar";
import ProductContainer from "./product/ProductContainer";

const ProductListPresenter = ({
  products,
  categories,
  filterByCat,
  sortByPrice,
  onCategoryChange,
  onPriceSort,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [productInCart, setProductInCart] = useState([]);

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const handleAddToCart = (productId) => {
    try {
      // find product object according id
      const productToInsertInCart = products.find(
        (product) => product.id === productId,
      );

      // find product in cartItems
      const isProductExistInCart = productInCart.filter(
        (product) => product.id === productToInsertInCart.id,
      );

      // if the product is exist in cart, then increase quantity
      if (isProductExistInCart.length > 0) {
        productInCart.map((product) => {
          if (product.id === productToInsertInCart.id) {
            product.quantity += 1;
          }
          return product;
        });
        setProductInCart([...productInCart]);
      } else {
        productToInsertInCart.quantity = 1;
        setProductInCart([...productInCart, productToInsertInCart]);
      }
    } catch (err) {
      console.log("Error while adding in cart");
    }
  };

  const handleDecreaseQty = (productId) => {
    productInCart.map((product) => {
      if (product.id === productId) {
        product.quantity--;
        if (product.quantity < 1) {
          product.quantity = 1;
        }
      }
    });
    setProductInCart([...productInCart]);
  };

  const handleInCreaseQty = (productId) => {
    productInCart.map((product) => {
      if (product.id === productId) {
        product.quantity++;
        if (product.quantity > product.stock) {
          product.quantity = product.stock;
        }
      }
    });
    setProductInCart([...productInCart]);
  };

  const handleDeleteProduct = (productId) => {
    const newCart = productInCart.filter((product) => product.id !== productId);
    setProductInCart(newCart);
  };

  return (
    <main className="main w-full min-h-screen bg-slate-900 p-4">
      <Navbar
        onToggleDropdown={handleToggleDropdown}
        productInCart={productInCart}
        toggleDropdown={toggleDropdown}
        onDecreaseQty={handleDecreaseQty}
        onInCreaseQty={handleInCreaseQty}
        onDeleteProduct={handleDeleteProduct}
      />
      <ProductContainer
        products={products}
        categories={categories}
        filterByCat={filterByCat}
        sortByPrice={sortByPrice}
        onAddToCart={handleAddToCart}
        onCategoryChange={onCategoryChange}
        onPriceSort={onPriceSort}
      />
    </main>
  );
};

export default ProductListPresenter;
