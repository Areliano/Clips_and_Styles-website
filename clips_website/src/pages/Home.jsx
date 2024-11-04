import heroImage1 from "/heroImage1.png";
import heroImage2 from "/heroImage2.png";
import heroImage3 from "/heroImage3.png";
import iperson from "/iperson.svg";
import imail from "/imail.svg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <main className="main-home container mx-auto p-4 ">
        <p className="">We are launching soon . Stay tuned and be there 🚀</p>

        <section className="home-image-wrapper grid grid-cols-3 place-items-center gap-4 my-12">
          <img
            src={heroImage1}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-24 min-h-32 rounded-2xl bg-neutral-400 object-cover object-center"
          />
          <img
            src={heroImage2}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-28 min-h-44 rounded-2xl bg-neutral-400 object-cover object-center"
          />
          <img
            src={heroImage3}
            alt="clips&styles-waitlist-hero-image-1"
            className="min-w-24 min-h-32  rounded-2xl bg-neutral-400 object-cover object-center"
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
          manage appointments and grow their business. It&apos;s a community where
          you can redefine beauty experience and business success on your terms.
        </p>

        <h2 className="text-xl font-bold text-center text-pretty">
          Join the waitlist
        </h2>
        <h4 className="font-semibold text-neutral-500 text-center mt-2 text-pretty">
          Get early access , news , exclusive offers and updates .
        </h4>

        <form action="" className="my-8 space-y-6">
          <div className="input-sections space-y-4">
            <fieldset className="border border-neutral-300 flex items-center gap-2 h-12 px-2 rounded-md">
              <img
                src={iperson}
                alt="waitlist-user-icon"
                className="User's-Full-Name"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full h-full outline-none focus:outline-none border-none rounded-md"
                autoFocus
              />
            </fieldset>

            <fieldset className="border border-neutral-300 flex items-center gap-2 h-12 px-2 rounded-md mb-8">
              <img
                src={imail}
                alt="waitlist-user-email"
                className=""
                name="User-Email-Address"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full h-full outline-none focus:outline-none border-none rounded-md "
              />
            </fieldset>
          </div>
          
          <p className="">Registered as :</p>

          <section className="flex gap-3 md:gap-8 flex-wrap radio-buttons">
            <label
              htmlFor="user-owner"
              className="flex items-center gap-2 tracking-wide font-medium"
            >
              <input
                type="radio"
                className="accent-[#23461A] size-5"
                name="user-type"
                value="Beauty shop owner"
                id="user-owner"
              />
              Beauty Shop Owner
            </label>
            <label
              htmlFor="user-customer"
              className="flex items-center gap-2 tracking-wide font-medium"
            >
              <input
                type="radio"
                className="accent-[#23461A] size-5"
                name="user-type"
                value="Beauty Customer"
                id="user-customer"
              />
              Beauty Customer
            </label>
          </section>

          <button
            className="bg-[#23461A] text-white h-12 rounded-md w-full font-semibold tracking-wide hover:bg-[#23461A]/90 active:translate-y-[2px] "
            type="button"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
