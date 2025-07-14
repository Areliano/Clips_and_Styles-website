export default function ForCustomers() {
  return (
    <div className="about-wrapper">
      <div className="about-main container mx-auto p-4 flex justify-center items-center">
        <h1 className="font-semibold text-neutral-800 tracking-wider text-xs text-center bg-neutral-200 border-l-4 border-l-blue-500 rounded-r p-2 inline-block">
          Clips & Styles for Customers !
        </h1>
      </div>
      <div className="accordion flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        <div className="items w-full md:w-[75%] px-2">
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
            open
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>How do I book a service on the app</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              To book a service, simply open the app, browse through the
              available salons, barbershops or spas, and select the service you
              wish to book. Choose a convenient time slot, fill in your details,
              and confirm your booking. You will receive a confirmation and
              reminder before your appointment.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Do I need to make a payment in advance</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              You can choose to pay in advance through the app using various
              payment methods such as credit/debit cards, mobile money, or
              e-wallets. Alternatively, you can pay directly at the salon,
              barbershop, or spa after your service.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span> How do I know my booking is confirmed</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Once you complete the booking process, you'll receive a
              confirmation message within the app and via email or SMS (if
              enabled). You can also view your confirmed bookings in the "My
              Bookings" section.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>What services are available in the app?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Our app offers a wide range of beauty services, including
              haircuts, hair coloring, facials, manicures, pedicures, massages,
              and more. You can view the full list of services when browsing the
              available salons, spas, or barbershops.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Can I choose a specific stylist or therapist?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Yes, when booking a service, you may have the option to select a
              specific stylist, barber, or therapist. If the option is
              available, you will see the list of available professionals at
              your selected location.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Is the app available in my area?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              The app is available in most major cities. To check if we're
              available in your area, simply download the app and enter your
              location details. We'll show you nearby salons, spas, and
              barbershops that accept bookings.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Can I leave a review for a service provider?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Absolutely! After your appointment, you'll have the option to
              leave a review on the provider's profile to share your experience
              with others.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Are there any loyalty or referral programs?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Yes! We offer loyalty points for each booking, which you can
              redeem on future services. Additionally, when you refer a friend,
              you both receive a discount on your next booking.
            </p>
          </details>

          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="md:text-[18px] font-semibold flex justify-between items-center">
              <span>Is my personal information secure?</span>
            </summary>
            <p className="text-sm md:text-base font-medium text-neutral-700">
              Yes, we take privacy seriously and use industry-standard
              encryption to protect your personal data. Your information is
              stored securely and is only shared with providers as needed for
              your bookings.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
