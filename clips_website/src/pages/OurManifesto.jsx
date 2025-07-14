import photo1 from "/Founder.png";
import photo2 from "/obsess.png";
import photo3 from "/experiment.png";
import photo4 from "/think.png";
import photo5 from "/humble.png";
import photo6 from "/act.png";


export default function OurManifesto() {
  return (
    <div className="g-white text-gray-800 px-8 py-12 md:px-20 lg:px-40">
      <div className="max-w-screen-lg mx-auto w-full">
        {/* Title */} 
        <h2 className="text-3xl font-bold text-center mb-10">Our Manifesto</h2>
      </div>
      <div className="w-full h-screen flex items-center justify-center bg-white mt-10">
        <div className="w-full h-full max-w-screen-lg max-h-screen bg-white rounded-lg p-6 flex flex-col justify-center">
          <div className="grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-8 h-full">

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-4">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo1} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-medium font-bold">Founder Mentality</div>
              </div>
              <hr className="border-gray-500 w-full mb-1" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-4">
                We embrace the “Founder’s mentality,” driving our mission to revolutionize the beauty booking experience. We believe that every team member should think like and act like a founder, regardless of their title.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-4">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo2} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-medium font-bold">Obsess over 1%</div>
              </div>
              <hr className="border-gray-500 w-full mb-1" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-4">
              We understand that greatness is built on the 
              relentless pursuit of incremental improvements. We 
              are committed to obsessing about the “1%” - the 
              small, often overlooked details that, when perfected,
              elevate the entire customer experience.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-4">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo3} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-medium font-bold">Experiment like a scientist</div>
              </div>
              <hr className="border-gray-500 w-full mb-1" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-4">
              We embody the spirit of experimentation, 
              approaching challenges and opportunities with a 
              scientific mindset. We believe that innovation thrives
              in an environment where curiosity and inquiry are 
              encouraged.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-2">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo4} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-medium font-bold">Think beyond ourselves</div>
              </div>
              <hr className="border-gray-500 w-full mb-1" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-2">
              We believe that true success is measured not just
              by our achievements but by the positive impact we 
              create in the world. We are committed to thinking
              beyond ourselves, fostering a culture that values 
              community, collaboration and social responsibility.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-6">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo5} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-lg font-bold">Humble student</div>
              </div>
              <hr className="border-gray-500 w-full mb-1" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-2">
              We recognize the journey of learning and growth is 
              continuous. We understand that no matter how much
              we know or achieve, there is always more to learn 
              from our experiences, out team, our customer and 
              our communities.
              </div>
            </div>

            <div className="bg-black text-white border border-gray-300 rounded-lg flex flex-col items-start p-6 font-semibold h-full">
              <div className="flex items-center mb-4">
                {/* Icon*/}
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <img src={photo1} alt="" className="w-6 h-6" />
                </div>
                {/* Heading */}
                <div className="heading text-lg font-bold">Act with intention</div>
              </div>
              <hr className="border-gray-500 w-full mb-2" />
              {/* Description */}
              <div className="words text-medium font-normal leading-relaxed mt-2">
              We believe that every action we take should be 
              purposeful and aligned with our core values. Acting 
              with intention means being mindful of the impact 
              our decisions have on our customers, our team and 
              the broader community.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
