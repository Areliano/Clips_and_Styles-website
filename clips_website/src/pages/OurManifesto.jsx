import photo1 from "/Founder.png"


export default function OurManifesto() {
  return (
    <div className="g-white text-gray-800 px-8 py-12 md:px-20 lg:px-40">
      <div className="max-w-screen-lg mx-auto w-full">
                   {/*Title*/} 
       <h2 className="text-4xl font-bold text-center mb-10">Our Manifesto</h2>
     </div>

     <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-screen-lg max-h-screen bg-white shadow-lg rounded-lg p-6 flex flex-col justify-center">
        {/* Grid layout for the inner cards */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold h-full"
            >
              Small Card {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>

    </div>

  );
};
