import { Link } from "@inertiajs/react";

const Walikota = () => {
  return (
    <div className="container pb-12 pt-32">
      <div className="grid grid-cols-3 gap-10">
        <div className="col-span-2">
          <img
            src="/img/walikota.jpg"
            alt="img"
            className="w-full border rounded"
          />
        </div>
        <div className="relative col-span-1 place-content-center">
          <img
            className="z-[-1] absolute top-[10px] -right-[40px] w-32 "
            src="/img/bg-titik.png"
            alt="img"
          />
          <div className="bg-white">
            <p className="uppercase font-semibold text-sm tracking-wider mb-3">
              Walikota Kendari
            </p>
            <h1 className="font-sen text-4xl leading-none font-bold mb-6">
              Dedicated to Providing Quality Service​
            </h1>
            <p className="text-sm mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor et dolore magna aliqua.
            </p>
            <Link
              href="/"
              className="bg-[#1A5590] rounded tracking-wider font-semibold px-6 py-3 text-sm text-white hover:bg-opacity-90 transition-all"
            >
              Lihat Profil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walikota;
