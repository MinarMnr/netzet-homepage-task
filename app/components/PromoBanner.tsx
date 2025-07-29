import React from "react";

const PromoBanner = () => {
  return (
    <div
      className="w-screen  bg-[linear-gradient(90deg,#FC004E_0%,#10CBE0_100%)] p-[20px] h-[76px] font-extrabold text-base leading-none text-center align-middle
                md:py-[10px] md:px-[200px] md:text-[22px] md:h-[46px] mx-auto"
    >
      🚀 <span className="text-[#00E7F9]">FRESH BEGINNINGS SALE: </span>
      <span className="font-semibold">
        Extra 25% OFF, Limited Spots - start your journey today!
      </span>
    </div>
  );
};

export default PromoBanner;
