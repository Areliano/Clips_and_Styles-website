import photo1 from "/Founder.png";

export default function OurManifesto() {
  return (
    <div className="g-white text-gray-800 px-8 py-12 md:px-20 lg:px-40">
      <div className="max-w-screen-lg mx-auto w-full">
        {/* Title */} 
        <h2 className="text-4xl font-bold text-center mb-10">Our Manifesto</h2>
      </div>
      <div className="w-full h-screen flex items-center justify-center bg-white mt-10">
        <div className="w-full h-full max-w-screen-lg max-h-screen bg-white rounded-lg p-6 flex flex-col justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 h-full">

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-6">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo1} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-lg font-bold">Founder Mentality</div>
              </div>
              <hr className="border-gray-500 w-full mb-4" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-4">
                We embrace the “Founder’s mentality,” driving our mission to revolutionize the beauty booking experience. We believe that every team member should think like and act like a founder, regardless of their title.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex items-center justify-center font-semibold h-full">Small Card 2</div>
            <div className="bg-black text-white border border-gray-300 rounded-lg flex items-center justify-center font-semibold h-full">Small Card 3</div>
            <div className="bg-black text-white border border-gray-300 rounded-lg flex items-center justify-center font-semibold h-full mb-10">Small Card 4</div>
            <div className="bg-black text-white border border-gray-300 rounded-lg flex items-center justify-center font-semibold h-full mb-10">Small Card 5</div>
            <div className="bg-black text-white border border-gray-300 rounded-lg flex items-center justify-center font-semibold h-full mb-10">Small Card 6</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
