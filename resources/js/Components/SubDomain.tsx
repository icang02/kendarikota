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
          <h1 className="font-sen text-3xl font-bold">
            Portal Terkait Kota Kendari
          </h1>
          <p className="text-sm italic">Portal Terkait Kota Kendari</p>
        </div>

        <div className="grid grid-cols-5 gap-5">
          {subdomain.map((item, i) => (
            <div className="text-center col-span-5 lg:col-span-1 relative rounded-2.5xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                blur={0}
                borderWidth={2}
                spread={80}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="mx-auto flex items-center justify-center border-2 border-[#1A5590]/15 size-20 p-3.5 rounded-full">
                <img
                  src="https://upload.wikimedia.org/wikipedia/id/c/c1/Lambang_Kota_Kendari_2022.png"
                  alt="img"
                  className="object-cover object-center"
                />
              </div>
              <h6 className="text-base font-bold uppercase my-4 mb-2 font-sen">
                {item.title}
              </h6>
              <a
                href={item.link}
                target="_blank"
                className="hover:bg-opacity-90 transition w-full inline-block text-[10px] font-bold uppercase rounded-lg px-5 py-2 bg-main text-white "
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
