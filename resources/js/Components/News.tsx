import { ApiResponse, Post } from "@/types";
import { useEffect, useState } from "react";
import { Skeleton } from "@/Components/ui/skeleton";

export default function News() {
  const [pengumuman, setPengumuman] = useState<ApiResponse>({
    loading: true,
    response: null,
    error: null,
  });

  const [pemerintahan, setPemerintahan] = useState<ApiResponse>({
    loading: true,
    response: null,
    error: null,
  });

  const [selectedMenu, setSelectedMenu] = useState<string>("pemerintahan");

  const handleMenuClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  useEffect(() => {
    fetch("http://kendarikota.test/api/pengumuman")
      .then((res) => res.json())
      .then((response: Post[]) =>
        setPengumuman({ loading: false, response, error: null })
      )
      .catch((error) =>
        setPengumuman({ loading: false, response: null, error: error.message })
      );

    fetch("http://kendarikota.test/api/postbycategory")
      .then((res) => res.json())
      .then((response: Post[]) =>
        setPemerintahan({ loading: false, response, error: null })
      )
      .catch((error) =>
        setPemerintahan({
          loading: false,
          response: null,
          error: error.message,
        })
      );
  }, []);

  const PemerintahanComponent = () => {
    if (pemerintahan.error) {
      return (
        <p className="text-sm text-red-500 text-center">
          Terjadi kesalahan pengambilan data
        </p>
      );
    }

    if (pemerintahan.loading) {
      return (
        <>
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className="rounded flex items-center border shadow hover:shadow-lg transition"
            >
              <Skeleton className="w-[152px] h-full aspect-video" />
              <div className="p-4 w-full">
                <Skeleton className="w-full h-4 mb-2" />
                <Skeleton className="w-[50%] h-4" />
              </div>
            </div>
          ))}
        </>
      );
    }

    if (!pemerintahan.response || pemerintahan.response.length === 0) {
      return <p className="text-sm">Tidak ada data tersedia</p>;
    }

    return pemerintahan.response.map((item) => (
      <div
        key={item.id}
        className="rounded flex items-center border shadow hover:shadow-lg transition"
      >
        <img
          src={item.better_featured_image?.source_url || ""}
          alt="img"
          width="160"
          className="rounded-tl rounded-bl border aspect-video object-cover object-top"
        />
        <div className="p-4 text-start">
          <a
            href={item.link}
            target="_blank"
            className="hover:underline line-clamp-2 text-xs leading-tight font-bold"
          >
            {item.title.rendered}
          </a>
          <small className="text-[11px]">
            <i className="fa-regular fa-clock text-gray-500"></i>&nbsp;
            {item.date}
          </small>
        </div>
      </div>
    ));
  };

  // <div id="gpr-kominfo-widget-container"></div>
  return (
    <section className="py-12 mt-20">
      <div className="container grid grid-cols-8 gap-8">
        <div className="col-span-6">
          <h1 className="mt-1 mb-2 font-sen text-4xl font-bold">
            Kendari Kini
          </h1>
          <div className="grid grid-cols-2 mt-7 gap-5">
            <div className="col-span-1">
              <h5 className="text-2xl font-semibold font-sen">Pengumuman</h5>
              <div className="mt-[19.5px] grid grid-cols-1 gap-4">
                {pengumuman.loading && <Skeleton />}
                {pengumuman.error && (
                  <p className="text-sm text-red-500 text-center">
                    Terjadi kesalahan pengambilan data
                  </p>
                )}
                {pengumuman.response &&
                  pengumuman.response.map((item) => (
                    <div
                      key={item.id}
                      className="rounded flex items-center border shadow hover:shadow-lg transition"
                    >
                      <img
                        src={item.better_featured_image?.source_url || ""}
                        alt="img"
                        width="160"
                        className="rounded-tl rounded-bl border aspect-video object-cover object-top"
                      />
                      <div className="p-4 text-start">
                        <a
                          href={item.link}
                          target="_blank"
                          className="hover:underline line-clamp-2 text-xs leading-tight font-bold"
                        >
                          {item.title.rendered}
                        </a>
                        <small className="text-[11px]">
                          <i className="fa-regular fa-clock text-gray-500"></i>
                          &nbsp;
                          {item.date}
                        </small>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-span-1">
              <h5 className="text-2xl font-semibold font-sen">Pemerintah</h5>
              <PemerintahanComponent />
            </div>
          </div>
          {/* <SubdomainList /> */}
        </div>
      </div>
    </section>
  );
}
