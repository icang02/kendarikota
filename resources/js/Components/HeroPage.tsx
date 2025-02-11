import { convertStringToWords } from "@/lib/constant";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { TypewriterEffect } from "@/Components/ui/typewriter-effect";

const HeroPage = ({
  title,
  description,
  breadcrumb,
  bgImage,
}: {
  title: string;
  description: string;
  breadcrumb: any;
  bgImage?: string;
}) => {
  return (
    <section
      className="relative h-[380px] bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bgImage ?? "/img/hero.png"})` }}
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
            {breadcrumb.map((item: any, i: any) => (
              <span key={i} className="flex items-center space-x-2">
                <BreadcrumbItem>
                  <BreadcrumbPage
                    className={`text-xs lg:text-sm text-white font-sen font-light ${
                      breadcrumb.length - 1 == i && "!text-white/80"
                    }`}
                  >
                    {item}
                  </BreadcrumbPage>
                </BreadcrumbItem>
                {breadcrumb.length - 1 != i && (
                  <BreadcrumbSeparator className="text-white/70" />
                )}
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
        <TypewriterEffect
          className="mt-7 lg:mt-10 mb-4 font-sen text-start tracking-wide uppercase"
          words={convertStringToWords(title)}
        />
        <p className="font-dmsans font-light text-xs lg:text-sm text-slate-200 max-w-xl">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeroPage;
