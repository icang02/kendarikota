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
import PageLayout from "@/Layouts/PageLayout";

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
      <PageLayout title={title}>
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
                      <h6 className="font-bold text-sm font-sen">
                        {item.nama}
                      </h6>
                      <p className="mt-1 text-[#173454] uppercase text-xs font-extrabold tracking-wide">
                        {item.jabatan.nama}
                      </p>
                      <p className="mt-2 text-sm font-medium tracking-wide">
                        {item.opd?.nama}
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
      </PageLayout>
    </GuestLayout>
  );
}
