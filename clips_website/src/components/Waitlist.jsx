import iperson from "/iperson.svg";
import imail from "/imail.svg";

export default function Waitlist() {
  return (
    <>
      <h2 className="text-xl font-bold text-center text-pretty">
        Join the waitlist
      </h2>
      <h4 className="font-semibold text-neutral-500 text-center mt-2 text-pretty">
        Get early access , news , exclusive offers and updates .
      </h4>

      <form action="" className="my-8 space-y-6">
        <div className="input-sections space-y-4">
          <fieldset className="border border-neutral-300 flex items-center gap-2 h-12 px-2 rounded-md">
            <img src={iperson} alt="waitlist-user-icon" />
            <input
              type="text"
              placeholder="Full Name"
              name="User's-Full-Name"
              className="w-full h-full outline-none focus:outline-none border-none rounded-md"
              autoFocus='true'
            />
          </fieldset>

          <fieldset className="border border-neutral-300 flex items-center gap-2 h-12 px-2 rounded-md mb-8">
            <img src={imail} alt="waitlist-user-email" className="" />
            <input
              type="text"
              placeholder="Email Address"
              id="email-address"
              name="User-Email-Address"
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
    </>
  );
}
