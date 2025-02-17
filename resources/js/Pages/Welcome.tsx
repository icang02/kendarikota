import Hero from "@/Components/Hero";
import News from "@/Components/News";
import Pejabat from "@/Components/Pejabat";
import SubDomain from "@/Components/SubDomain";
import { Card } from "@/Components/card";
import Walikota from "@/Components/Walikota";
import GuestLayout from "@/Layouts/GuestLayout";
import { useEffect } from "react";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardTwibbonGenerate from "@/Components/CardTwibbonGenerate";
// import CardTwibbonGenerate from "@/Components/CardTwibbonGenerate";

export default function Welcome({
  youtube,
  pejabat,
  infografis,
  twibbon,
  slider,
  banner,
}: any) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widget.kominfo.go.id/gpr-widget-kominfo.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <GuestLayout>
      <Hero slider={slider} />
      <Walikota banner={banner} />
      <News />
      <div className="container pb-5">
        <div className="grid grid-cols-10 gap-0 lg:gap-10">
          <div className="col-span-10 lg:col-span-7">
            <SubDomain />
            {/*  */}
          </div>

          <div className="col-span-10 lg:col-span-3 flex flex-col gap-5 lg:gap-8">
            {/* Pejabat Pemerintah */}
            <div>
              <div className="mb-5 lg:mb-6">
                <h1 className="mb-0.5 font-sen text-xl font-bold">
                  Pejabat Pemerintah
                </h1>
                <p className="text-xs lg:text-sm italic">
                  Pejabat Pemerintah Daerah Kota Kendari
                </p>
              </div>
              <Card className="p-5">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  slidesPerView={1}
                  loop
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                >
                  {pejabat.map((item: any, i: any) => (
                    <SwiperSlide key={i} className="relative group">
                      <img
                        className="transition ease-out brightness-[0.9] group-hover:brightness-50 border aspect-[3/4] object-cover object-top w-full"
                        src={
                          item.foto
                            ? `/storage/${item.foto}`
                            : "/img/default/foto-pejabat.png"
                        }
                        alt="img"
                      />
                      <div className="p-5 font-sen text-start text-white absolute -bottom-[50%] duration-500 transition-all ease-out group-hover:bottom-0">
                        <h6 className="font-bold text-base">{item.nama}</h6>
                        <h6 className="font-normal text-sm">
                          {item.jabatan.nama}
                        </h6>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Card>
            </div>
            {/* Infografis */}
            <div className="p-1 lg:p-0">
              <h1 className="mb-3 font-sen text-xl font-bold">Infografis</h1>
              <Swiper
                modules={[Autoplay, EffectFade]}
                slidesPerView={1}
                loop
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                speed={1000}
              >
                {infografis.map((item: any, i: number) => (
                  <SwiperSlide key={i}>
                    <Card className="py-5">
                      <img
                        className="w-full lg:w-[94%] mx-auto transition ease-out group-hover:brightness-50 rounded-none lg:rounded-lg border"
                        src={
                          item.img
                            ? `/storage/${item.img}`
                            : "/img/default/foto-pejabat.png"
                        }
                        alt="img"
                      />
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <Pejabat twibbon={twibbon} youtube={youtube} />
    </GuestLayout>
  );
}
