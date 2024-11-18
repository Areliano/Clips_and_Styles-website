import Carousel from "../components/Carousel";
import Waitlist from "../components/Waitlist";

export default function Home() {    
  return (
    <div className="home-wrapper">
      <main className="main-home container mx-auto p-4 md:w-[80%] lg:w-[60%] 2xl:w-1/2">
        <p className="">We are launching soon . Stay tuned and be there 🚀</p>

        <Carousel />

        <h2 className="text-2xl md:text-3xl font-bold text-pretty">
          Effortless Beauty , on your own terms !
        </h2>

        <p className="mt-8 mb-16 text-pretty">
          Discover the future of beauty with Clips & Styles , where effortless
          elegance meets business growth. Customer enjoy the freedom to book
          premium beauty services on their own schedule, while beauty
          professionals unlock new opportunities to showcase their talents,
          manage appointments and grow their business. It&apos;s a community
          where you can redefine beauty experience and business success on your
          terms.
        </p>

        <Waitlist/>
      </main>
    </div>
  );
}
