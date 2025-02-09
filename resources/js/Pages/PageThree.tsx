import { TypewriterEffect } from "@/Components/ui/typewriter-effect";
import GuestLayout from "@/Layouts/GuestLayout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Card } from "@/Components/ui/card";
import { useForm } from "@inertiajs/react";
import PaginationNav from "@/Components/PaginationNav";

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

export default function PageThree({
  title,
  pejabat,
}: {
  title: string;
  pejabat: any;
}) {
  const { data, setData } = useForm({
    page: pejabat.current_page,
  });

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

      {/* Main Content */}
      <div
        className="relative pb-8 bg-bottom bg-cover"
        style={{ backgroundImage: `url("/img/tesktur.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/0 to-white/100"></div>
        <div className="relative z-[99] container -translate-y-20 lg:-translate-y-12">
          <div className="grid grid-cols-4 gap-6 lg:gap-7">
            {pejabat.data.map((item: any, i: any) => (
              <div key={i} className="col-span-4 lg:col-span-1">
                <Card className="shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-3xl px-6 py-7 h-full w-full bg-blue-200 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0 border border-white/30">
                  <img
                    src={
                      item.foto
                        ? `/storage/${item.foto}`
                        : "/img/default/foto-pejabat.png"
                    }
                    alt="img"
                    className="border border-white/30 rounded-2xl aspect-[3/3.5] object-cover object-top"
                  />
                  <div className="mt-3 text-center">
                    <h6 className="font-bold text-sm font-sen">{item.nama}</h6>
                    <p className="mt-1 text-[#173454] uppercase text-xs font-extrabold tracking-wide">
                      {item.jabatan.nama}
                    </p>
                    <p className="mt-2 text-sm font-medium tracking-wide">
                      {item.tempat}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <PaginationNav
              links={pejabat.links}
              currentPage={pejabat.currentPage}
              setCurrentPage={(page: any) => setData("page", page)}
            />
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}

const pejabat = [
  {
    nama: "Muhammad Yusuf, SE, M. Si",
    image: "https://kendari.test/assets/img/pejabat/asmawa-tosepu-ap-msi2.png",
    jabatan: "Pj Walikota",
  },
  {
    nama: "Sri Yusnita, ST.,MM",
    image: "https://kendari.test/assets/img/pejabat/sri-yusnita-stmm1.png",
    jabatan: "Inspektur",
    tempat: "Inspektorat",
  },
  {
    nama: "Ir. Nismawati, M.Si",
    image: "https://kendari.test/assets/img/pejabat/ir-nismawati-msi4.jpg",
    jabatan: "Kepala Dinas",
    tempat: "Dinas Komunikasi & Informatika",
  },
  {
    nama: "Hj. Erlis Sadya Kencana, ST.,MT",
    image:
      "https://kendari.test/assets/img/pejabat/hj-erlis-sadya-kencana-stmt1.jpg",
    jabatan: "Kepala Dinas",
    tempat: "Dinas PU & Penataan Ruang",
  },
];
