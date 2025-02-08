import { Link } from "@inertiajs/react";

const Walikota = () => {
  return (
    <div className="overflow-hidden w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.08] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container pb-14 pt-20 lg:pt-32">
        <div className="grid grid-cols-3 gap-4 lg:gap-10">
          <div className="col-span-3 lg:col-span-2">
            <img
              src="/img/walikota.jpg"
              alt="img"
              className="w-full border rounded"
            />
          </div>
          <div className="relative col-span-3 lg:col-span-1 place-content-center">
            <img
              className="z-[1] absolute -top-5 -right-10 w-36"
              src="/img/bg-titik.png"
              alt="img"
            />
            <div>
              <p className="uppercase font-semibold text-xs lg:text-sm tracking-wider mb-1 lg:mb-3">
                Walikota Kendari
              </p>
              <h1 className="font-sen text-xl lg:text-4xl leading-none font-bold">
                Dedicated to Providing Quality Service​
              </h1>
              <p className="text-sm mt-4 lg:mt-6 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor et dolore magna aliqua.
              </p>
              <Link
                href="/"
                className="bg-[#1A5590] rounded tracking-wider font-semibold px-6 py-3 text-[10px] lg:text-sm text-white hover:bg-opacity-90 transition-all"
              >
                Lihat Profil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Walikota;
