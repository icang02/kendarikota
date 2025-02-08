import { TypewriterEffect } from "@/Components/ui/typewriter-effect";
import GuestLayout from "@/Layouts/GuestLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import Walikota from "@/Components/Walikota";

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

export default function Sejarah({ title }: { title: string }) {
  return (
    <GuestLayout>
      <section
        className="relative h-[380px] bg-cover bg-bottom"
        style={{ backgroundImage: `url("/img/hero.png")` }}
      >
        <div className="z-10 absolute inset-0 bg-black/50"></div>
        <div className="z-20 relative container pt-32">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-sen font-light">
                  Beranda
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/70" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-sen font-light">
                  Kendari Kita
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/70" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white/80 font-sen font-light">
                  {title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <TypewriterEffect
            className="mt-10 mb-4 font-sen text-start tracking-wide uppercase"
            words={convertStringToWords(title)}
          />
          <p className="font-dmsans font-light text-sm text-slate-200 max-w-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus autem minus error voluptates expedita! Mollitia
          </p>
        </div>
      </section>

      <Walikota />
    </GuestLayout>
  );
}
