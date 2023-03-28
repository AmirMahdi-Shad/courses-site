import HeroSection from "@/components/HeroSection/HeroSection";
import WomenSection from "@/components/WomenSection/WomenSection";

export default function Home() {
  return (
    <>
      <div>
        {/* Hero Section */}
        <section className='container w-full px-[7.8vw] py-[2.5vw]'>
          <HeroSection />
        </section>

        <section className='h-screen'></section>
        <WomenSection />
      </div>
    </>
  );
}
