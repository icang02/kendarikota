import Hero from "@/Components/Hero";
import News from "@/Components/News";
import Pejabat from "@/Components/Pejabat";
import SubDomain from "@/Components/SubDomain";
import Walikota from "@/Components/Walikota";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome() {
  return (
    <GuestLayout>
      <Hero />
      <Walikota />
      <News />
      <Pejabat />
      <SubDomain />
    </GuestLayout>
  );
}
