import Hero from "@/components/hero";
import Achievement from "@/components/achievement";
import Service from "@/components/services";
import Package from "@/components/package";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Achievement />
      <Service />
      <Package />
      <Testimonials />
      <Contact />
    </div>
  );
}
