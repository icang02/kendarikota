import Hero from "@/Components/Hero";
import News from "@/Components/News";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Welcome() {
  return (
    <GuestLayout>
      <Hero />
      <News />
    </GuestLayout>
  );
}
