import { useEffect, useState } from "react";
import Card from "./Card";

const Cart = ({
  productInCart,
  onDecreaseQty,
  onInCreaseQty,
  onDeleteProduct,
}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = getCartTotal();
    setTotal(totalPrice);
  }, [productInCart]);

  const getCartTotal = () => {
    return productInCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <div className="z-10 bg-slate-800 border border-gray-700 rounded-lg shadow-lg max-w-xl w-full absolute top-24 md:top-16 right-0">
      <div className="relative overflow-x-auto bg-slate-900 shadow-xs rounded-lg border border-gray-700 p-2">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <thead className="text-sm text-body bg-gray-800 border-b rounded-base border-gray-700">
            <tr>
              <th scope="col" className="px-3 py-1.5 font-medium">
                Product name
              </th>
              <th scope="col" className="px-3 py-1.5 font-medium">
                Unit price
              </th>
              <th scope="col" className="px-3 py-1.5 font-medium text-center">
                Quantity
              </th>
              <th scope="col" className="px-3 py-1.5 font-medium">
                Price
              </th>
              <th scope="col" className="px-3 py-1.5 font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {productInCart &&
              productInCart.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  onDecreaseQty={onDecreaseQty}
                  onInCreaseQty={onInCreaseQty}
                  onDeleteProduct={onDeleteProduct}
                />
              ))}

            <tr className="border-b border-gray-700">
              <td></td>
              <td></td>
              <td className="py-4 text-right">Total = </td>
              <td className="px-3 py-1.5">${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
