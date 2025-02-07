import { ApiResponse } from "@/types";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export default function News() {
  // const [pengumuman, setPengumuman] = useState<ApiResponse>({
  //   loading: true,
  //   response: null,
  //   error: null,
  // });

  // useEffect(() => {
  //   fetch("/api/pengumuman")
  //     .then((res) => res.json())
  //     .then((response: Post[]) =>
  //       setPengumuman({ loading: false, response, error: null })
  //     )
  //     .catch((error) =>
  //       setPengumuman({ loading: false, response: null, error: error.message })
  //     );

  //   fetch("/api/postbycategory")
  //     .then((res) => res.json())
  //     .then((response: Post[]) =>
  //       setPemerintahan({ loading: false, response, error: null })
  //     )
  //     .catch((error) =>
  //       setPemerintahan({
  //         loading: false,
  //         response: null,
  //         error: error.message,
  //       })
  //     );
  // }, []);

  return (
    <section className="py-12 pt-0">
      <div className="container grid grid-cols-10 gap-8">
        <div className="col-span-7">
          <div className="mb-4">
            <h1 className="font-sen text-3xl font-bold">Kendari Kini</h1>
            <p className="text-sm italic">
              Baca berita terupdate seputar kota kendari
            </p>
          </div>

          <div className="mb-5 grid grid-cols-3 gap-4">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((item, i) => (
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
                      src="https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="img"
                      className="hover:brightness-90 object-cover object-center mb-3 w-full h-[145px] rounded-lg transition"
                    />
                  </a>
                  <div className="group-hover:translate-x-1.5 transition ease-out">
                    <span className="text-xs text-neutral-500">
                      <i className="fa-regular fa-clock"></i>
                      <span className="font-sen ml-1.5 font-medium">
                        Rabu, 5 Maret 2025
                      </span>
                    </span>
                    <a
                      href="#"
                      className="block line-clamp-1 my-2 font-sen text-[15px] font-semibold"
                    >
                      The Dawn of Innovation
                    </a>
                    <p className="line-clamp-2 text-xs font-light">
                      Explore the birth of groundbreaking ideas and inventions.
                    </p>
                  </div>
                </Card>
              </div>
            ))}
            {/* {Array.from({ length: 5 }, (_, i) => i + 1).map((item, i) => (
              <div
                key={i}
                className={`${
                  i == 3
                    ? "col-span-3 lg:col-span-2"
                    : "col-span-3 lg:col-span-1"
                }`}
              >
                <Card className="p-4 h-full">
                  <Skeleton className="object-cover object-center mb-3 w-full h-[145px] rounded-lg" />
                  <div>
                    <Skeleton className="h-3.5 w-[40%]" />
                    <Skeleton className="h-3.5 my-2 mt-5" />
                    <Skeleton className="h-3.5 w-[50%]" />
                  </div>
                </Card>
              </div>
            ))} */}
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
        <div className="col-span-3">
          <div className="mb-4">
            <h1 className="font-sen text-xl font-bold">Berita Komdigi</h1>
            <p className="text-sm italic">
              Informasi Kementerian Komunikasi dan Digital
            </p>
          </div>
          <div id="gpr-kominfo-widget-container"></div>
        </div>
      </div>
    </section>
  );
}
