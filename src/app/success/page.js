import Link from "next/link";

const SuccessPage = () => {
  return (
    <section className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Your Payment Accepted by Smart Shopping
        </h2>
        <p>Now you can continue Shopping with us</p>
        <Link href={"/"}>
          <button className="bg-blue-500 text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-blue-700 duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
