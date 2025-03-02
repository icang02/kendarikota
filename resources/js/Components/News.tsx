import { Card } from "@/Components/card";
import { ApiResponse, Post } from "@/types";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export default function News() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [pengumuman, setPengumuman] = useState<ApiResponse>({
    loading: true,
    response: null,
    error: null,
  });

  const handleRefresh = () => {
    setPengumuman({
      loading: true,
      response: null,
      error: null,
    });
    setRefreshKey((prev) => prev + 1);
  };

  // useEffect(() => {
  //   fetch("/api/pengumuman")
  //     .then((res) => res.json())
  //     .then((response: Post[]) => {
  //       setPengumuman({ loading: false, response, error: null });
  //     })
  //     .catch((error) =>
  //       setPengumuman({ loading: false, response: null, error: error.message })
  //     );
  // }, [refreshKey]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const uri =
          "https://berita.kendarikota.go.id/wp-json/wp/v2/posts?per_page=5&_fields=id,title,date,link,featured_media,better_featured_image.source_url";

        const response = await fetch(uri);

        if (!response.ok) {
          return console.table("Failed to fetch posts");
        }

        const posts = await response.json();
        setPengumuman({ loading: false, response: posts, error: null });
      } catch (error) {
        // setPengumuman(log{ loading: false, response: null, error: error.message })
        console.table(error);
      }
    };

    getPosts();
  }, [refreshKey]);

  return (
    <section className="py-12 pt-0">
      <div className="container grid grid-cols-10 gap-8">
        <div className="col-span-10 lg:col-span-7">
          <div className="mb-4">
            <h1 className="font-sen text-xl lg:text-3xl font-bold">
              Kendari Kini
            </h1>
            <p className="text-xs lg:text-sm italic">
              Baca berita terupdate seputar kota kendari
            </p>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-4">
            {pengumuman.loading ? (
              Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => (
                <div
                  key={i}
                  className={`${
                    i == 3
                      ? "col-span-3 lg:col-span-2"
                      : "col-span-3 lg:col-span-1"
                  }`}
                >
                  <Card className="p-4 h-full">
                    <Skeleton className="object-cover object-center mb-3 w-full h-[180px] lg:h-[145px] rounded-lg" />
                    <div>
                      <Skeleton className="h-3.5 w-[40%]" />
                      <Skeleton className="h-3.5 my-2 mt-5" />
                      <Skeleton className="h-3.5 w-[50%]" />
                    </div>
                  </Card>
                </div>
              ))
            ) : pengumuman.error ? (
              <div className="col-span-3 text-center py-6">
                <p className="text-red-500 font-semibold">
                  Gagal memuat berita
                </p>
                <p className="text-sm mt-1 mb-3 text-gray-500">
                  Failed to fetch data from api
                </p>
                <button
                  onClick={handleRefresh}
                  className="text-xs px-4 py-2 bg-[#1A5590] text-white rounded-md hover:bg-blue-600 transition"
                >
                  Refresh
                </button>
              </div>
            ) : (
              pengumuman.response?.map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i == 3
                      ? "col-span-3 lg:col-span-2"
                      : "col-span-3 lg:col-span-1"
                  }`}
                >
                  <Card className="p-4 h-full hover:shadow-xl transition group">
                    <a href="#" className="relative overflow-hidden">
                      <img
                        src={item.better_featured_image?.source_url}
                        alt="img"
                        className="hover:brightness-90 object-cover object-center mb-3 w-full h-[180px] lg:h-[145px] rounded-lg transition"
                      />
                    </a>
                    <div className="group-hover:translate-x-1.5 transition ease-out">
                      <span className="text-xs text-neutral-500 flex items-center space-x-1">
                        <Clock className="w-[12px]" />
                        <span className="font-sen ml-1.5 font-medium">
                          {new Date(item.date).toLocaleDateString("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                      </span>
                      <p className="mt-2">
                        <a
                          target="_blank"
                          href={item.link}
                          className="line-clamp-2 leading-tight font-sen text-[15px] font-semibold"
                        >
                          {item.title.rendered}
                        </a>
                      </p>
                    </div>
                  </Card>
                </div>
              ))
            )}
          </div>
          <a
            target="_blank"
            href="https://berita.kendarikota.go.id/category/berita-kendari"
            className="w-fit rounded-xl px-4 py-1 bg-white text-black border border-gray-300 text-xs font-semibold flex items-center space-x-2 hover:border hover:border-[#1A5590] hover:text-[#1A5590] transition"
          >
            <span>Berita lainnya</span>
            <span className="text-[10px] text-black/90">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </a>
        </div>
        <div className="col-span-10 lg:col-span-3">
          <div className="mb-4">
            <h1 className="font-sen text-xl font-bold">Berita Komdigi</h1>
            <p className="text-xs lg:text-sm italic">
              Informasi Kementerian Komunikasi dan Digital
            </p>
          </div>
          <div className="px-3 md:px-0">
            <div id="gpr-kominfo-widget-container"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
