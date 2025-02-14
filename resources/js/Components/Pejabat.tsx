import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/Components/ui/card";
import { BackgroundGradientAnimation } from "./ui/aceternity/background-gradient-animation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Pejabat = ({ youtube, pejabat }: any) => {
  return (
    <section className="pb-12 lg:pb-14">
      <div className="container grid grid-cols-10 gap-8">
        <div className="col-span-10 lg:col-span-7">
          <BackgroundGradientAnimation className="flex items-center justify-center w-full h-full">
            <div className="text-white w-full px-3.5 lg:px-10">
              <h1 className="mb-1 font-sen text-xl lg:text-3xl font-bold">
                Video
              </h1>
              <p className="text-xs lg:text-sm italic">
                Video program dan kegiatan Pemerintah Kota Kendari
              </p>

              {/* Frame Video */}
              <Card className="mt-7 p-1.5 lg:p-4 w-full bg-white/20 border-none">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {youtube.map((item: any, i: any) => (
                    <SwiperSlide key={i}>
                      <div
                        className="relative w-full"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          src={`https://www.youtube.com/embed/` + item.link}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Card>
            </div>
          </BackgroundGradientAnimation>
        </div>

        <div className="col-span-10 lg:col-span-3 text-center">
          <div className="mb-5 lg:mb-6">
            <h1 className="mb-1 lg:mb-2 font-sen text-2xl lg:text-3xl font-bold">
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
              // effect="fade"
              speed={1000}
            >
              {pejabat.map((item: any, i: any) => (
                <SwiperSlide key={i} className="relative group">
                  <img
                    className="transition ease-out brightness-[0.9] group-hover:brightness-50 rounded-lg border aspect-[3/4] object-cover object-top w-full"
                    src={
                      item.foto
                        ? `/storage/${item.foto}`
                        : "/img/default/foto-pejabat.png"
                    }
                    alt="img"
                  />
                  <div className="p-5 font-sen text-start text-white absolute -bottom-[20%] duration-500 transition-all ease-out group-hover:bottom-0">
                    <h6 className="font-bold text-base">{item.nama}</h6>
                    <h6 className="font-normal text-sm">{item.jabatan.nama}</h6>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pejabat;
