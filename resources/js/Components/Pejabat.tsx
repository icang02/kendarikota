import { DirectionAwareHover } from "./ui/direction-aware-hover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import { Card } from "@/Components/ui/card";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Pejabat = () => {
  return (
    <section className="pb-12 lg:pb-14">
      <div className="container grid grid-cols-10 gap-8">
        <div className="col-span-10 lg:col-span-6">
          <BackgroundGradientAnimation className="flex items-center justify-center w-full h-full">
            <div className="text-white w-full px-6 lg:px-10">
              <h1 className="mb-1 font-sen text-xl lg:text-3xl font-bold">
                Video
              </h1>
              <p className="text-xs lg:text-sm italic">
                Video program dan kegiatan Pemerintah Kota Kendari
              </p>

              {/* Frame Video */}
              <Card className="mt-7 p-3 lg:p-4 w-full bg-white/20 border-none">
                <Swiper
                  modules={[Pagination]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  <SwiperSlide>
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/A4MPZvKLyLI`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={`https://www.youtube.com/embed/A4MPZvKLyLI`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </Card>
            </div>
          </BackgroundGradientAnimation>
        </div>

        <div className="col-span-10 lg:col-span-4 text-center">
          <div className="mb-5 lg:mb-6">
            <h1 className="mb-1 lg:mb-2 font-sen text-2xl lg:text-3xl font-bold">
              Pejabat Pemerintah
            </h1>
            <p className="text-xs lg:text-sm italic">
              Pejabat Pemerintah Daerah Kota Kendari
            </p>
          </div>

          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={"/img/pejabat-2.jpg"}>
                    <p className="font-bold text-base lg:text-xl">
                      In the mountains
                    </p>
                    <p className="font-normal text-xs lg:text-sm">
                      $1299 / night
                    </p>
                  </DirectionAwareHover>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={"/img/pejabat-1.jpg"}>
                    <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p>
                  </DirectionAwareHover>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative flex items-center justify-center">
                  <DirectionAwareHover imageUrl={"/img/pejabat-3.jpg"}>
                    <p className="font-bold text-xl">In the mountains</p>
                    <p className="font-normal text-sm">$1299 / night</p>
                  </DirectionAwareHover>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Pejabat;
