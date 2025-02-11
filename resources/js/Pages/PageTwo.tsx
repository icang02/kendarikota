import GuestLayout from "@/Layouts/GuestLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import PageLayout from "@/Layouts/PageLayout";
import parse from "html-react-parser";

export default function PageTwo({ title, data }: { title: string; data: any }) {
  const icons = [
    { link: "#", icon: <i className="fa-brands fa-facebook-f"></i> },
    { link: "#", icon: <i className="fa-brands fa-instagram"></i> },
    { link: "#", icon: <i className="fa-brands fa-tiktok"></i> },
    { link: "#", icon: <i className="fa-brands fa-youtube"></i> },
  ];

  return (
    <GuestLayout>
      <PageLayout title={title}>
        <div
          className="relative pb-8 bg-bottom bg-cover"
          style={{ backgroundImage: `url("/img/tesktur.jpg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/0 to-white/100"></div>
          <div className="relative z-[99] pb-0 lg:pb-5">
            <div className="px-2 lg:px-0 mx-auto max-w-5xl">
              <div className="grid grid-cols-6 gap-5">
                <div className="col-span-6 lg:col-span-2">
                  <Card className="relative z-20 w-full mx-auto -translate-y-20 lg:-translate-y-12 shadow-2xl shadow-blue-500/20">
                    <CardContent className="pt-6">
                      <img
                        className="border rounded w-full"
                        src={
                          data?.foto
                            ? `/storage/${data.foto}`
                            : "/img/default/foto-pejabat.png"
                        }
                        alt="img"
                      />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                      <h6 className="text-lg font-bold font-sen">
                        {data?.nama ? data.nama : "No name"}
                      </h6>
                      <p className="tracking-wide text-sm text-main font-extrabold uppercase">
                        {data?.jabatan.nama}
                      </p>
                    </CardFooter>
                  </Card>
                </div>
                <div className="col-span-6 lg:col-span-4">
                  <Card className="relative z-20 w-full max-w-3xl mx-auto -translate-y-20 lg:-translate-y-12 shadow-2xl shadow-blue-500/20">
                    <CardHeader>
                      <CardTitle className="text-base lg:text-lg font-bold">
                        Biodata Lengkap
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm prose-zinc">
                      {parse(data?.keterangan ? data.keterangan : "No data")}
                    </CardContent>
                    <CardFooter className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
                      <a
                        href="#"
                        className="text-sm hover:underline font-medium"
                      >
                        <span>
                          <i className="fa-regular fa-circle-up"></i>&nbsp;
                        </span>
                        <span> Kembali ke atas</span>
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </GuestLayout>
  );
}
