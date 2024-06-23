import { fetchProductDetails } from "@/actions";
import AddToCartButton from "@/components/addToCartButton";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Rating from "@/components/rating";

async function ProductDetails({ params }) {
  const getProductDetails = await fetchProductDetails(params.details);
  const productDetails = getProductDetails?.data;
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 bg-gray-100 ">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={productDetails.thumbnail}
            alt={productDetails.name}
            className="w-full md:w-1/3 rounded-lg"
          />
          <div className="flex flex-col gap-1 md:ml-4">
            <h1 className="text-3xl font-bold">{productDetails.title}</h1>
            <p className="text-gray-600">{productDetails.description}</p>
            <p className="text-gray-800">Brand: {productDetails.brand}</p>
            <p className="text-xl font-semibold">${productDetails.price}</p>
            <Rating rating={productDetails.rating} />
            <p className="text-green-500">
              {productDetails.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <div className="flex space-x-4 my-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Buy Now
              </button>
              <AddToCartButton productDetails={productDetails} />
            </div>
            <p className="w-fit text-sm bg-slate-300 p-1 text-white font-semibold rounded">
              • {productDetails.shippingInformation}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Reviews</h2>
          {productDetails.reviews?.map((review, index) => (
            <div key={index} className="border-b py-4">
              <p className="text-gray-800 font-semibold">{review.user}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500">Rating: {review.rating}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
