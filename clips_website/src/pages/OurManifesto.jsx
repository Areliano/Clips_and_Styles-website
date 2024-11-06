import { useState } from "react";

export default function OurManifesto() {
  
    const [count, setCount] = useState(0);
    function addCount(){
    if (count < 10){
      setCount(count+1)
      console.table(count+1);
    }else {
      return ;
    }
          
    }
    
  return (
  
    <div className="about-wrapper">
      <div className="about-main container mx-auto p-4">
        {/* Our Manifesto */}
        <p className="text-center uppercase underline font-semibold underline-offset-4">POTUS ELECTION</p>
        
        <button className="border border-neutral-200 rounded-md py-2 px-6 block mx-auto my-8 active:bg-neutral-100 active:translate-y-[2px] hover:bg-neutral-100" onClick={addCount}>Vote</button>
        
        <p className="font-bold text-8xl text-center">{count}</p>
        {count === 10 && <p className="text-sm text-center border border-yellow-300 bg-yellow-100/70 p-2 rounded-md">The maximum vote casts is 10</p>}
      </div>
    </div>
  );
}
