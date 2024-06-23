import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">Your Last Payment was cancelled</h2>
        <p>Retry your payment or continue Shopping with us</p>
        <div className="flex gap-x-7">
          <Link href={"/cart"}>
            <button className="bg-blue-500 text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-blue-700 duration-300">
              View Orders
            </button>
          </Link>
          <Link href={"/"}>
            <button className="bg-green-500 text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-green-700 duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
