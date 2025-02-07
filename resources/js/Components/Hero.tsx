const Hero = () => {
  return (
    <section
      className="relative h-[92vh] bg-cover bg-bottom"
      style={{ backgroundImage: "url('img/hero.png')" }}
    >
      <div className="absolute z-[98] inset-0 bg-gradient-to-b from-black/45 to-black/85"></div>

      <div className="relative z-[99] h-full flex justify-center items-center">
        <div className="text-center">
          <p className="font-sen mb-5 bg-[#23529A] inline-block px-5 py-1 rounded text-base text-slate-100 tracking-wider font-light uppercase">
            Selamat datang di website
          </p>
          <h1 className="font-sen text-white text-5xl font-bold leading-[53px]">
            Portal Resmi Pemerintah Daerah <br /> Kota Kendari
          </h1>
          <p className="mx-auto mt-10 max-w-3xl text-base text-slate-300 leading-relaxed">
            Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya
            kendari kota layak huni yang berbasis Ekologi, Informasi &
            Teknologi.
          </p>
        </div>

        <div className="absolute w-[70%] bg-white shadow-lg rounded px-8 py-7 -bottom-14">
          <form action="#" className="grid grid-cols-6 text-sm gap-5">
            <div className="col-span-3">
              <input
                type="text"
                className="rounded px-5 py-4 w-full bg-[#F4F5F5]"
                placeholder="Cari berita apa..."
              />
            </div>
            <div className="col-span-2">
              <select className="rounded px-5 py-4 w-full bg-[#F4F5F5]">
                <option value="">Kategori</option>
              </select>
            </div>
            <div className="col-span-1">
              <button
                type="submit"
                className="rounded text-white font-semibold tracking-wide px-5 py-4 w-full bg-[#1A5590] hover:bg-[#1a5590c4] transition ease-in"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
