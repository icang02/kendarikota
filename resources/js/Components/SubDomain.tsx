import { GlowingEffect } from "./ui/glowing-effect";

const subdomain = [
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "SPPD",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "SIMPEKA",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "SIMPER",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "Shope",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "Toko pedia",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "Mboile Legend",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "Absen Digital",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png",
    link: "#",
    title: "Kominfo",
  },
];
const SubDomain = () => {
  return (
    <section className="py-12 pt-0">
      <div className="container">
        <div className="mb-6">
          <h1 className="font-sen text-xl lg:text-3xl font-bold">
            Akses Cepat
          </h1>
          <p className="text-xs lg:text-sm italic">
            Terhubung ke berbagai layanan melalui tautan berikut
          </p>
        </div>

        <div className="grid grid-cols-6 gap-4 lg:gap-5">
          {subdomain.map((item, i) => (
            <div
              key={i}
              className="text-center col-span-3 lg:col-span-1 relative rounded-2.5xl border p-2 md:rounded-3xl md:p-3"
            >
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="mx-auto flex items-center justify-center border-2 border-[#1A5590]/15 size-16 lg:size-20 p-3 lg:p-3.5 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png"
                  alt="img"
                  className="object-cover object-center"
                />
              </div>
              <h6 className="text-sm lg:text-base font-bold uppercase my-2 mb-3 lg:mb-4 font-sen">
                {item.title}
              </h6>
              <a
                href={item.link}
                target="_blank"
                className="hover:bg-opacity-90 transition w-full inline-block text-[9px] lg:text-[10px] font-bold uppercase rounded px-5 py-2 bg-main text-white "
              >
                Kunjungi
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubDomain;
