import HeroSection from "@/components/HeroSection/HeroSection";
import Categories from "@/components/Categories/Categories";
import WomenSection from "@/components/WomenSection/WomenSection";

import FooterJoinCart from "@/components/FooterJoinCart/FooterJoinCart";
import Partners from "@/components/Partners/Partners";
export default function Home() {
  return (
    <>
      <div>
        <section className='container w-full px-[7.8vw] py-[2.5vw]'>
          <HeroSection />
        </section>
        <Partners />
        <Categories />
        <WomenSection />

        <FooterJoinCart />
      </div>
    </>
  );
}
