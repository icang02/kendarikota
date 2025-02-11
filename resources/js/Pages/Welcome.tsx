import Hero from "@/Components/Hero";
import News from "@/Components/News";
import Pejabat from "@/Components/Pejabat";
import SubDomain from "@/Components/SubDomain";
import Twibbon from "@/Components/Twibbon";
import { Card } from "@/Components/ui/card";
import Walikota from "@/Components/Walikota";
import GuestLayout from "@/Layouts/GuestLayout";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Welcome({
  youtube,
  pejabat,
  infografis,
  twibbon,
}: any) {
  return (
    <GuestLayout>
      <Hero />
      <Walikota />
      <News />
      <Pejabat youtube={youtube} pejabat={pejabat} />

      <div className="container pb-14">
        <div className="grid grid-cols-10 gap-0 lg:gap-10">
          <div className="col-span-10 lg:col-span-7">
            <SubDomain />
          </div>

          <div className="col-span-10 lg:col-span-3">
            <div className="mb-7">
              <h1 className="font-sen text-xl font-bold">Twibbon</h1>
              <p className="text-xs lg:text-sm italic">
                Unggah foto untuk membuat twibbon kamu
              </p>

              {/* <Card className="mt-5 p-5 py-7">
                <h6 className="w-full lg:w-[90%] mx-auto font-extrabold font-sen text-base text-[#1A3C61] uppercase leading-tight text-center">
                  {twibbon.title}
                </h6>
                <img
                  className="w-full lg:w-[90%] mx-auto my-4 mb-2 transition ease-out group-hover:brightness-50 rounded-lg border"
                  src={`/storage/${twibbon.img}`}
                  alt="img"
                />
                <div className="flex flex-col lg:flex-row gap-2 w-full">
                  <button className="w-full bg-[#1A5590] hover:bg-opacity-90 transition ease-out text-xs font-sen py-2 text-white font-medium uppercase tracking-wide">
                    Buat
                  </button>
                  <button className="w-full border border-gray-300 bg-white hover:bg-gray-100 transition ease-out text-xs font-sen py-2 text-black font-medium uppercase tracking-wide">
                    Lihat lainnya
                  </button>
                </div>
              </Card> */}
              <Twibbon />
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
                        className="w-full lg:w-[90%] mx-auto transition ease-out group-hover:brightness-50 rounded-lg border"
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
