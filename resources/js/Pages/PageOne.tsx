import GuestLayout from "@/Layouts/GuestLayout";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import parse from "html-react-parser";
import PageLayout from "@/Layouts/PageLayout";

export default function PageOne({ title, data }: { title: string; data: any }) {
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
              <Card className="relative z-20 w-full max-w-3xl mx-auto -translate-y-20 lg:-translate-y-12 shadow-2xl shadow-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-base lg:text-lg font-bold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm prose-zinc">
                  {parse(data.isi)}
                </CardContent>
                <CardFooter className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between">
                  <a href="#" className="text-sm hover:underline font-medium">
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
      </PageLayout>
    </GuestLayout>
  );
}
