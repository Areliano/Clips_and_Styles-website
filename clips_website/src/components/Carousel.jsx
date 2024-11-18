import { useEffect, useState } from "react";
import heroImage1 from "/heroImage1.png";
import heroImage2 from "/heroImage2.png";
import heroImage3 from "/heroImage3.png";

const Carousel = () => {
 const [currentIndex, setCurrentIndex] = useState(0);
 const images = [heroImage1, heroImage2, heroImage3]; // Replace with your image sources

 useEffect(() => {
   const interval = setInterval(() => {
     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
   }, 3000); // Change image every 3 seconds
   return () => clearInterval(interval); // Cleanup interval on unmount
 }, [images.length]);

  return (
    <div>
      <section className="home-image-wrapper grid grid-cols-3 place-items-center gap-2 md:gap-4 my-12">
        <img
          src={heroImage1}
          alt="clips&styles-waitlist-hero-image-1"
          className="min-w-20 min-h-32 rounded-xl bg-neutral-300 object-cover object-center"
        />
        <img
          src={heroImage2}
          alt="clips&styles-waitlist-hero-image-1"
          className="min-w-24 min-h-44 rounded-xl bg-neutral-300 object-cover object-center"
        />
        <img
          src={heroImage3}
          alt="clips&styles-waitlist-hero-image-1"
          className="min-w-20 min-h-32  rounded-xl bg-neutral-300 object-cover object-center"
        /> 
      </section>
    </div>
  );
};

export default Carousel;
