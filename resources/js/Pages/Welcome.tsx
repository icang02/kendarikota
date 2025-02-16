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
      {/* <Pejabat youtube={youtube} pejabat={pejabat} /> */}

      <div className="container pb-14">
        <div className="grid grid-cols-10 gap-0 lg:gap-10">
          <div className="col-span-10 lg:col-span-7">
            <SubDomain />
            {/*  */}
          </div>

          <div className="col-span-10 lg:col-span-3">
            <div className="mb-7">
              <h1 className="font-sen text-xl font-bold">Twibbon</h1>
              <p className="mb-5 text-xs lg:text-sm italic">
                Unggah foto untuk membuat twibbon kamu
              </p>
              <CardTwibbonGenerate twibbon={twibbon} />
            </div>

            <div className="p-1">
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
                        className="w-full lg:w-[90%] mx-auto transition ease-out group-hover:brightness-50 rounded-none lg:rounded-lg border"
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
    </GuestLayout>
  );
}
