export default function ForShopOwners() {
  return (
    <div className="about-wrapper">
      <div className="about-main container mx-auto p-4 flex justify-center items-center">
        <h1 className="font-semibold text-neutral-800 tracking-wider text-xs text-center bg-neutral-200 border-l-4 border-l-orange-500 rounded-r p-2 inline-block">
          Clips & Styles for Beauty Shop Owners !
        </h1>
      </div>
      <div className="accordion flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl px-4 md:px-0 font-bold mb-6">
          Frequently Asked Questions
        </h1>
        
        <div className="items w-[75%]">
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
            open
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>How can this app benefit my beauty business?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-600">
              Our app streamlines bookings, making it easier for clients to
              schedule services at your salon, barbershop, or spa. This helps
              reduce no-shows, improve client retention, and boost your
              visibility by attracting new clients who use the app.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Is there a fee for listing my business on the app?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, we offer different pricing plans depending on your business
              needs. We also offer a free trial period so you can explore all
              the app's features and see the value it brings to your business.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>How will I receive booking notifications?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              You'll receive booking notifications directly within the app. We
              can also enable email or SMS notifications, so you and your staff
              are instantly alerted whenever a new booking is made.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>
                What types of reports or analytics does the app provide?
              </span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              The app offers detailed reports, including metrics on bookings,
              cancellations, peak booking times, and customer demographics.
              These insights help you understand your clientele and optimize
              your offerings accordingly.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Can my clients pay through the app?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, clients can choose to pay securely through the app at the
              time of booking. We support multiple payment options, making it
              convenient for clients while ensuring timely payments for you.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>How can I promote special offers or discounts?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              You can easily create and showcase special offers or discounts
              through the app. Clients will see these offers when browsing your
              services, helping you attract more bookings during promotions.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Is there customer support if I have issues?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Absolutely. Our customer support team is here to help with any
              questions or issues. You can contact us via chat, email, or phone
              for assistance.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Can I list multiple branches of my business?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, our app allows for multi-location support. Each branch can
              have its own profile, schedule, and service list, so clients can
              book at the location most convenient for them.
            </p>
          </details>
          
          
          <details
            className="accordion-item px-4 py-3 md:px-8 bg-[#f2f4f7]"
            name="faq"
          >
            <summary className="text-[16px] md:text-[18px] font-semibold font-sans flex justify-between items-center">
              <span>Is my business's data secure on the app?</span>
            </summary>
            <p className="text-[14px] md:text-[16px] font-medium font-sans text-neutral-700">
              Yes, we prioritize data security. All information is encrypted and
              securely stored, ensuring that both your business and your
              clients' information are protected at all times.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
