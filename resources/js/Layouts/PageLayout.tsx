import { PropsWithChildren, useEffect, useState } from "react";
import HeroPage from "@/Components/HeroPage";
import SubDomain from "@/Components/SubDomain";
import {
  menuArsip,
  menuEvent,
  menuKendariKita,
  menuPeraturanDaerah,
  menuStatistik,
} from "@/lib/constant";

type PageLayoutProps = {
  title: string;
};

export default function PageLayout({
  title,
  children,
}: PropsWithChildren<PageLayoutProps>) {
  const [description, setDescription] = useState<any>("");
  const [breadcrumb, setBreadcrumb] = useState<any>([]);

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname.includes("/kendari-kita")) {
      setBreadcrumb([menuEvent.label, title]);
      setDescription(
        menuKendariKita.menu.find((item) => item.href == pathname)?.description
      );
    } else if (pathname.includes("/direktori")) {
      setBreadcrumb([menuEvent.label, title]);
    } else if (pathname.includes("/event")) {
      setBreadcrumb([menuEvent.label, title]);
      setDescription(
        menuEvent.menu.find((item) => item.href == pathname)?.description
      );
    } else if (pathname.includes("/arsip")) {
      setBreadcrumb([menuArsip.label, title]);
      setDescription(menuArsip.description);
    } else if (pathname.includes("/peraturan-daerah")) {
      setDescription(menuPeraturanDaerah.description);
      setBreadcrumb([menuStatistik.label, title]);
    } else if (pathname.includes("/statistik")) {
      setDescription(menuStatistik.description);
      setBreadcrumb([menuStatistik.label, title]);
    }
  }, []);

  return (
    <>
      <HeroPage
        title={title}
        description={description}
        breadcrumb={breadcrumb}
      />
      {children}
      <div className="container">
        <SubDomain />
      </div>
    </>
  );
}
