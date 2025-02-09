import { TypewriterEffect } from "@/Components/ui/typewriter-effect";
import GuestLayout from "@/Layouts/GuestLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { sejarah, visiMisi } from "@/lib/data";
import parse from "html-react-parser";

type WordObject = {
  text: string;
  className?: string;
};

function convertStringToWords(inputString: string): WordObject[] {
  return inputString.split(" ").map((word, index, array) => {
    const obj: WordObject = { text: word };
    if (index === array.length - 1) {
      obj.className = "text-blue-400";
    }
    return obj;
  });
}

export default function PageOne({ title }: { title: string }) {
  const icons = [
    { link: "#", icon: <i className="fa-brands fa-facebook-f"></i> },
    { link: "#", icon: <i className="fa-brands fa-instagram"></i> },
    { link: "#", icon: <i className="fa-brands fa-tiktok"></i> },
    { link: "#", icon: <i className="fa-brands fa-youtube"></i> },
  ];

  let content = "";
  if (location.pathname == "/kendari-kita/sejarah-kota-kendari") {
    content = sejarah;
  } else if (location.pathname == "/kendari-kita/visi-misi") {
    content = visiMisi;
  }

  return (
    <GuestLayout>
      <section
        className="relative h-[380px] bg-cover bg-bottom"
        style={{ backgroundImage: `url("/img/hero.png")` }}
      >
        <div className="z-10 absolute inset-0 bg-black/50"></div>
        <div className="z-20 relative container pt-24 lg:pt-32">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs lg:text-sm text-white font-sen font-light">
                  Beranda
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/70" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs lg:text-sm text-white font-sen font-light">
                  Kendari Kita
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/70" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs lg:text-sm text-white/80 font-sen font-light">
                  {title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <TypewriterEffect
            className="mt-7 lg:mt-10 mb-4 font-sen text-start tracking-wide uppercase"
            words={convertStringToWords(title)}
          />
          <p className="font-dmsans font-light text-xs lg:text-sm text-slate-200 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus autem minus error voluptates expedita! Mollitia
          </p>
        </div>
      </section>

      <div className="relative z-[99] pb-0 lg:pb-5">
        <div className="z-10 absolute h-full inset-0 w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        <div className="px-2 lg:px-0">
          <Card className="relative z-20 w-full max-w-3xl mx-auto -translate-y-20 lg:-translate-y-12 shadow-2xl shadow-blue-500/20">
            <CardHeader>
              <CardTitle className="text-base lg:text-lg font-bold">
                {title}
              </CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-sm prose-zinc">
              {parse(content)}
            </CardContent>
            <CardFooter className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
              <a href="#" className="text-sm hover:underline font-medium">
                <span>
                  <i className="fa-regular fa-circle-up"></i>
                </span>
                <span> Kembali ke atas</span>
              </a>

              <div className="flex space-x-2 text-[14px]">
                {icons.map((item, i) => (
                  <a
                    target="_blank"
                    href={item.link}
                    key={i}
                    className="p-2 size-7 border border-black/30 inline-flex justify-center items-center rounded-full text-black/60 hover:text-[#1A3C61]/90 hover:border-[#1A3C61]/50"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </GuestLayout>
  );
}
