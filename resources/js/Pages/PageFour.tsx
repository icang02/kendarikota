import GuestLayout from "@/Layouts/GuestLayout";
import { Card } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";
import PageLayout from "@/Layouts/PageLayout";

export default function PageThree({ title, opd }: { title: string; opd: any }) {
  return (
    <GuestLayout>
      <PageLayout title={title}>
        <div
          className="relative pb-0 lg:pb-8 bg-bottom bg-cover"
          style={{ backgroundImage: `url("/img/tesktur.jpg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/0 to-white/100"></div>

          <div className="relative z-[99] container -translate-y-20 lg:-translate-y-12">
            <div className="grid grid-cols-2 gap-5 lg:gap-7">
              {Object.keys(opd).map((kategori, i) => (
                <div key={i} className="col-span-2 lg:col-span-1">
                  <Card className="bg-white/95 backdrop-blur-md shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] rounded-2xl px-6 py-5 w-full border border-white/30">
                    <h6 className="font-extrabold text-base text-[#173454] font-sen uppercase">
                      {kategori}
                    </h6>
                    <ScrollArea className="h-20 pt-3">
                      <ul className="flex flex-col space-y-1.5 lg:space-y-1 text-xs lg:text-sm">
                        {opd[kategori].map((list: any, j: any) => (
                          <li key={j} className="flex items-center space-x-2">
                            <span className="size-2 bg-blue-800"></span>
                            <span>{list.nama}</span>
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
      </PageLayout>
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
