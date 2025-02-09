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
import { GlareCard } from "@/Components/ui/glare-card";
import { ScrollArea } from "@/Components/ui/scroll-area";

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

export default function PageThree({ title }: { title: string }) {
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

      {/* Main Content */}
      <div
        className="relative pb-0 lg:pb-8 bg-bottom bg-cover"
        style={{ backgroundImage: `url("/img/tesktur.jpg")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/0 to-white/100"></div>

        <div className="relative z-[99] container -translate-y-20 lg:-translate-y-12">
          <div className="grid grid-cols-2 gap-5 lg:gap-7">
            {pejabat.map((item, i) => (
              <div key={i} className="col-span-2 lg:col-span-1">
                <Card className="bg-white/95 backdrop-blur-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl px-6 py-5 w-full border border-white/30">
                  <h6 className="font-extrabold text-base text-[#173454] font-sen uppercase">
                    Badan
                  </h6>
                  <ScrollArea className="h-20 pt-3">
                    <ul className="flex flex-col space-y-1.5 lg:space-y-1 text-xs lg:text-sm">
                      {dataUl.map((item, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="size-2 bg-blue-800"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GuestLayout>
  );
}

const dataUl = [
  "Badan Kepegawaian & Pengembangan SDM",
  "Badan Kesatuan Bangsa dan Politik",
  "Badan Penanggulangan Bencana Daerah",
  "Badan Pengelola Keuangan & Aset Daerah",
  "Badan Pengelola Pajak & Retribusi Daerah",
  "Badan Perencanaan Pembangunan Daerah",
];
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
  {
    nama: "Hj. Erlis Sadya Kencana, ST.,MT",
    image:
      "https://kendari.test/assets/img/pejabat/hj-erlis-sadya-kencana-stmt1.jpg",
    jabatan: "Kepala Dinas",
    tempat: "Dinas PU & Penataan Ruang",
  },
  {
    nama: "Hj. Erlis Sadya Kencana, ST.,MT",
    image:
      "https://kendari.test/assets/img/pejabat/hj-erlis-sadya-kencana-stmt1.jpg",
    jabatan: "Kepala Dinas",
    tempat: "Dinas PU & Penataan Ruang",
  },
  {
    nama: "Hj. Erlis Sadya Kencana, ST.,MT",
    image:
      "https://kendari.test/assets/img/pejabat/hj-erlis-sadya-kencana-stmt1.jpg",
    jabatan: "Kepala Dinas",
    tempat: "Dinas PU & Penataan Ruang",
  },
];
