import Hero from "@/Components/Hero";
import News from "@/Components/News";
import Walikota from "@/Components/Walikota";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome() {
  return (
    <GuestLayout>
      <Hero />
      <Walikota />
      <News />
    </GuestLayout>
  );
}
