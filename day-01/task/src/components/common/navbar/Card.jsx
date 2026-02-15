const Card = ({ product, onDecreaseQty, onInCreaseQty, onDeleteProduct }) => {
  return (
    <tr className="border-b border-gray-700">
      <th
        scope="row"
        className="px-3 py-1.5 font-medium text-heading whitespace-nowrap"
      >
        <div className="flex items-center gap-2">
          <img
            src={product.imageUrl || "/placeholder.jpg"}
            alt={product.name}
            className="w-10 rounded"
          />
          <p className="line-clamp-1">{product.name}</p>
        </div>
      </th>
      <td className="px-3 py-1.5">${product.price}</td>
      <td className="px-3 py-1.5">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onDecreaseQty(product.id)}
            className="text-2xl font-black cursor-pointer"
          >
            -
          </button>
          <input
            // defaultValue={product.quantity}
            value={product.quantity}
            readOnly={true}
            type="text"
            size={2}
            className="border border-neutral-500 rounded-lg p-2 text-center text-white"
          />
          <button
            onClick={() => onInCreaseQty(product.id)}
            className="text-2xl font-black cursor-pointer"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-3 py-1.5">${product.quantity * product.price}</td>
      <td className="px-3 py-1.5">
        <button
          onClick={() => onDeleteProduct(product.id)}
          className="cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-rose-800"
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
              d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Card;
