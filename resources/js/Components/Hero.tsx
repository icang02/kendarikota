// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import FormSearch from "./FormSearch";

const slider = [
  { img: "img/hero.png" },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Kendari_Bay_Bridge.jpg",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/6/63/Kendari_at_night.jpg",
  },
];

const Hero = () => {
  return (
    <section className="relative h-[92vh] bg-cover bg-bottom">
      <div className="absolute inset-0 z-[99] h-full flex justify-center items-center">
        <div className="text-center">
          <div className="mb-5">
            <Button
              borderRadius="4px"
              duration={3500}
              className="border-none text-sm bg-[#23529A] tracking-wider text-white uppercase font-sen font-light"
            >
              Selamat datang di website
            </Button>
          </div>
          <TextGenerateEffect
            className="max-w-4xl font-extrabold text-white text-5xl leading-[53px] font-sen"
            duration={1}
            filter={true}
            words={"Portal Resmi Pemerintah Daerah Kota Kendari"}
          />

          <p className="mx-auto mt-10 max-w-3xl text-base text-slate-300 leading-relaxed">
            Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya
            kendari kota layak huni yang berbasis Ekologi, Informasi &
            Teknologi.
          </p>
        </div>

        <div className="absolute w-[40rem] bg-white shadow-lg rounded-[40px] px-6 py-5 -bottom-12">
          <FormSearch />
        </div>
      </div>

      <div className="h-full absolute z-[98] inset-0 bg-gradient-to-b from-black/45 to-black/85"></div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={1500}
      >
        {slider.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.img}
              alt="img"
              className="h-[92vh] w-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
