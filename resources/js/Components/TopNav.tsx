import { useEffect, useState } from "react";
import Clock from "./Clock";

const Topnav = () => {
  const icons = [
    { link: "#", icon: <i className="fa-brands fa-facebook-f"></i> },
    { link: "#", icon: <i className="fa-brands fa-instagram"></i> },
    { link: "#", icon: <i className="fa-brands fa-tiktok"></i> },
    { link: "#", icon: <i className="fa-brands fa-youtube"></i> },
  ];

  // Handle scrool nav
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block backdrop-blur bg-[#1A3C61]/95 z-[997] top-0 transform translate-y-[0px] fixed w-full text-white transition-all ease-out ${
        isScrolled && "!translate-y-[-35px]"
      }`}
    >
      <div className="py-1.5 pb-2 container flex items-center justify-between">
        <div className="flex items-center gap-7">
          <p className="font-sen text-xs text-white/90">
            <span className="text-[10px] text-white/80">
              <i className="fa-solid fa-location-dot"></i>
            </span>{" "}
            Kendari, Sulawesi Tenggara
          </p>

          <p className="text-xs text-white/90">
            <span className="text-[10px] text-white/80">
              <i className="fa-regular fa-clock"></i>
            </span>
            &nbsp;&nbsp;
            <Clock className="text-xs" />
          </p>
        </div>

        <div className="flex space-x-1 text-[10px]">
          {icons.map((item, i) => (
            <a
              target="_blank"
              href={item.link}
              key={i}
              className="size-5 border border-white/30 inline-flex justify-center items-center rounded-full text-white/80 hover:text-white/90"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
