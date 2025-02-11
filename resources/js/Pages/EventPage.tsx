import GuestLayout from "@/Layouts/GuestLayout";
import { Card, CardHeader, CardTitle } from "@/Components/ui/card";
import PageLayout from "@/Layouts/PageLayout";
import CardFile from "@/Components/CardFile";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Search } from "lucide-react";

export default function EventPage({
  title,
  data,
}: {
  title: string;
  data: any;
}) {
  return (
    <GuestLayout>
      <PageLayout title={title}>
        <div
          className="relative pb-8 bg-bottom bg-cover"
          style={{ backgroundImage: `url("/img/tesktur.jpg")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/0 to-white/100"></div>
          <div className="relative z-[99] pb-0 lg:pb-5">
            <div className="px-2 lg:px-0">
              <Card className="mb-4 pb-2 relative z-20 w-full max-w-lg mx-auto -translate-y-20 lg:-translate-y-12 shadow-2xl shadow-blue-500/20">
                <CardHeader className="flex items-center flex-col space-y-4">
                  <CardTitle className="text-base lg:text-lg font-bold">
                    <span>{title}</span>
                  </CardTitle>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Search..." />
                    <Button
                      className="bg-[#173454] hover:bg-opacity-90"
                      type="submit"
                    >
                      <Search />
                    </Button>
                  </div>
                </CardHeader>
              </Card>

              <div className="relative -translate-y-20 lg:-translate-y-8 grid grid-cols-4 gap-5 max-w-6xl mx-auto">
                {data.map((item: any, i: any) => (
                  <div key={i} className="col-span-5 lg:col-span-1 h-full">
                    {location.pathname.includes("/peraturan-daerah") ? (
                      <CardFile
                        fileName={item.no_perda}
                        sumber={item.tentang}
                        downloadUrl={item.file}
                      />
                    ) : location.pathname.includes("/statistik") ? (
                      <CardFile
                        fileName={item.judul}
                        sumber={item.deskripsi}
                        downloadUrl={item.file}
                      />
                    ) : (
                      <CardFile
                        fileName={item.judul}
                        sumber={item.sumber}
                        downloadUrl={item.link}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </GuestLayout>
  );
}
