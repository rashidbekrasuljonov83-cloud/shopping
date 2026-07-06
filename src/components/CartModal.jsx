import React from "react";

function CartModal({ cart, onClose }) {
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-lg mb-4">Savatchangiz</h3>

        {cart.length === 0 ? (
          <p className="py-4 text-center text-gray-500">
            Savatchangiz hozircha bo'sh.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Mahsulot</th>
                  <th>Nomi</th>
                  <th>Narxi</th>
                  <th>Soni</th>
                  <th>Jami</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="avatar">
                        <div className="w-12 h-12 rounded">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                    </td>
                    <td className="font-semibold">{item.name}</td>
                    <td>{item.price.toLocaleString()} so'm</td>
                    <td className="font-bold text-center">
                      {item.amount} tadan
                    </td>
                    <td className="text-primary font-bold">
                      {(item.price * item.amount).toLocaleString()} so'm
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="divider"></div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-bold">Umumiy hisob:</span>
              <span className="text-2xl font-black text-secondary">
                {totalPrice.toLocaleString()} so'm
              </span>
            </div>
          </div>
        )}

        <div className="modal-action">
          <button onClick={onClose} className="btn">
            Yopish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
