import aboutphoto1 from "/about1.png";
import aboutphoto2 from "/about2.png";




export default function About() {
  return (
    <div className="bg-white text-gray-800 px-8 py-12 md:px-20 lg:px-40">
      <div className="max-w-screen-lg mx-auto w-full">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10 text-pretty">About Us</h2>

        {/* Section Content */}
        <div className="space-y-12 font-serif text-pretty">
          {/* First Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-3">
                Clips&Styles isn't just a booking app 
              </h3>
              <p className="text-lg mb-4">
                It's a lifestyle upgrade. It's about making beauty services as effortless as they should be.
              </p>
              <p className="text-lg">
                Clips&Styles is about convenience, choice, and quality. It's not just a platform to schedule services; it's your personal gateway to looking and feeling your best without stress.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src={aboutphoto1} alt="Person relaxing" className="w-72 h-72 rounded-lg shadow-lg object-cover" />
            </div>
          </div>

          {/* Second Section */}
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <div className="md:w-1/2 flex justify-center order-last md:order-none">
              <img src={aboutphoto2} alt="Salon interior" className="w-72 h-72 rounded-lg shadow-lg object-cover" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                But it's not just about making life easier for customers. Clips & Styles is also here for the barbers, stylists, and beauty experts who bring their skills and creativity to the forefront every day. We're more than a tool; we're a partner that helps them showcase their talents, grow their business, and connect with clients who truly appreciate their craft.
              </p>
            </div>
          </div>

          {/* Third Section */}
          <div className="text-lg">
            <p>
              At the heart of Clips & Styles is you—the busy professional, the trendsetter, the person who wants to look and feel great but doesn't have hours to spare. We're here to make sure that whenever you're ready for a change, we're just a few clicks away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};