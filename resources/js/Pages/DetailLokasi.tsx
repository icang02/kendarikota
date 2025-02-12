import GuestLayout from "@/Layouts/GuestLayout";
import { Card } from "@/Components/ui/card";
import PageLayout from "@/Layouts/PageLayout";
import { Phone } from "lucide-react";
import Maps from "@/Components/Maps";

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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-5 gap-5">
            <div className="col-span-5 lg:col-span-3">
              <Card className="p-6 lg:p-8 lg:px-9 flex flex-rpw gap-4 justify-between items-center">
                <Maps
                  name={data.nama}
                  latitude={data.latitude}
                  longitude={data.longitude}
                />
              </Card>
            </div>
            <div className="col-span-5 lg:col-span-2">
              <Card className="p-6 lg:p-8 lg:px-9 flex flex-rpw gap-4 justify-between items-center">
                <div>
                  <h6 className="font-sen text-lg font-bold leading-tight">
                    {data.nama}
                  </h6>
                  <p className="text-sm my-4 mb-6">{data.alamat}</p>
                  <p className="text-sm flex items-center space-x-1.5 tracking-wide">
                    <Phone size={12} />{" "}
                    <span>{data.telp ?? "No phone data"}</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </PageLayout>
    </GuestLayout>
  );
}
