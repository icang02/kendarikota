import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Card } from "@/Components/card";
import { BackgroundGradientAnimation } from "./ui/aceternity/background-gradient-animation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardTwibbonGenerate from "./CardTwibbonGenerate";

const Pejabat = ({ twibbon, youtube }: any) => {
  return (
    <section className="pb-6 lg:pb-20 mt-4 lg:mt-0">
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

        <div className="col-span-10 lg:col-span-3">
          <div className="mb-7">
            <h1 className="font-sen text-xl font-bold">Twibbon</h1>
            <p className="mb-5 text-xs lg:text-sm italic">
              Unggah foto untuk membuat twibbon kamu
            </p>
            <CardTwibbonGenerate twibbon={twibbon} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pejabat;
