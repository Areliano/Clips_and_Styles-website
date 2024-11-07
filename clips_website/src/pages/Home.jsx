import heroImage1 from "/heroImage1.png";
import heroImage2 from "/heroImage2.png";
import heroImage3 from "/heroImage3.png";
import Waitlist from "../components/Waitlist";

export default function Home() {
  return (
    <div className="home-wrapper">
      <main className="main-home container mx-auto p-4 ">
        <p className="">We are launching soon . Stay tuned and be there 🚀</p>

        <section className="home-image-wrapper grid grid-cols-3 place-items-center gap-2 md:gap-4 my-12">
          <img
            src={heroImage1}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-20 min-h-32 rounded-2xl bg-neutral-300 object-cover object-center"
          />
          <img
            src={heroImage2}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-24 min-h-44 rounded-2xl bg-neutral-300 object-cover object-center"
          />
          <img
            src={heroImage3}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-20 min-h-32  rounded-2xl bg-neutral-300 object-cover object-center"
          />
        </section>

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
