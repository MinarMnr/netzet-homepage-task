import Image from "next/image";
import Hero from "@/public/images/hero.png";
import Hero_Mobile from "@/public/images/hero_mobile.png";

const HeroSection = () => {
  return (
    <>
      <div className="absolute top-[76px] lg:hidden w-full max-w-[390px] left-1/2 transform -translate-x-1/2 h-[426px]">
        <Image
          src={Hero_Mobile}
          className="object-cover w-full h-full"
          alt="Hero"
          priority
          quality={100}
          width={390}
          height={426}
        />
      </div>
      <div className="absolute top-[126px] right-[101px] hidden lg:block w-[666px] h-[679px]">
        <Image
          src={Hero}
          quality={100}
          width={666}
          height={679}
          alt="Hero"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="flex flex-col lg:flex-row relative max-w-[516px]">
        <div className="flex flex-col z-10 mt-[300px] lg:mt-14 gap-[22px] pt-5 lg:gap-[30px]">
          <section>
            <p className="font-urbanist font-extrabold text-[25px] text-center lg:font-bold lg:text-[35px] lg:text-left">
              Want to Turn Social Media Into a Profitable Career?
            </p>
            <p className="font-urbanist font-extrabold text-[25px] text-center text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E] lg:text-[35px] lg:font-bold lg:text-left">
              Discover your way to success with Fametonic:
            </p>

            <div className="mt-[22px] gap-2.5 font-medium lg:font-semibold lg:mt-[16px] lg:gap-[13px] leading-[22px]">
              <div className="flex items-center gap-2.5">
                <p className="text-[22px]">✨</p>
                <p>
                  Start growing your influence right away—no waiting required!
                </p>
              </div>

              <div className="flex items-center gap-2.5 mt-2.5">
                <p className="text-[22px]">✨</p>
                <p>
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>

              <div className="flex items-center gap-2.5 mt-2.5">
                <p className="text-[22px]">✨</p>
                <p>Use a Personal AI Worker to boost your content</p>
              </div>

              <div className="flex items-center gap-2.5 mt-2.5">
                <p className="text-[22px]">✨</p>
                <p>
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col lg:flex-col-reverse">
            <section className="flex flex-col gap-5 lg:gap-3 px-8 lg:p-0 text-center text-[#ABABAB] mt-[22px] lg:mt-[30px] lg:text-left">
              <p className="font-medium text-xs">
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>

              <p className="font-nunito lg:font-figtree text-[10px] lg:text-left">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </section>

            <div className="flex flex-col lg:w-[313px] mt-8 lg:mt-[30px] text-center gap-2.5">
              <button className="bg-[#FC004E] rounded-[10px] py-[8px] px-[40px] shadow-[2px_2px_10px_0px_#00E7F9] flex items-center justify-center gap-[10px] w-full lg:w-[313px] lg:h-[40px]">
                <span className="font-urbanist font-bold text-[20px] flex gap-2.5">
                  GET STARTED
                  <Image
                    src="/images/vector.svg"
                    width={11}
                    height={6}
                    alt="vector"
                  />
                </span>
              </button>

              <p className="text-xs">1-minute quiz for personalized Insights</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;