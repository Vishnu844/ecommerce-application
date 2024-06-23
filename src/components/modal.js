import Rating from "./rating";

export default function Modal({ selectedProduct, handleModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg max-w-lg w-full m-4">
        <button className="float-right" onClick={() => handleModal()}>
          X
        </button>
        <img
          src={selectedProduct.image}
          alt={selectedProduct.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
        <div className="flex items-center justify-between mt-1">
          <p className="text-gray-700">${selectedProduct.price}</p>
          <div className="flex items-center gap-2">
            <Rating rating={selectedProduct.rating.rate} />
            <p className="text-gray-700 text-xs">
              {selectedProduct.rating.count}
            </p>
          </div>
        </div>
        <p className="mt-3">{selectedProduct.description}</p>
      </div>
    </div>
  );
}
