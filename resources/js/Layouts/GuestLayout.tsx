import { PropsWithChildren } from "react";
import Navbar from "@/Components/Navbar";
import Topnav from "@/Components/TopNav";
import Footer from "@/Components/Footer";
import SubDomain from "@/Components/SubDomain";

export default function Guest({ children }: PropsWithChildren) {
  return (
    <div className="font-mulish">
      <Topnav />
      <Navbar />
      {children}
      <SubDomain />
      <Footer />
    </div>
  );
}
