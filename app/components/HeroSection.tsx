import Image from "next/image";
import Hero from "@/public/images/hero.png";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="flex mt-[-90px] md:hidden">
          <Image src={Hero} className="object-cover" alt="Hero" />
        </div>
        <div className="absolute top-[-20px] right-0 md:order-2 md:mr-[-120px]">
          <div className="relative w-[666px] h-[679px] hidden md:block">
            <Image src={Hero} fill alt="Hero" objectFit="cover" />
          </div>
        </div>

        <div className="md:order-1 md:mt-[166px] md:z-10">
          <section className="mt-[-100px] z-10 md:gap-4">
            <h1 className="font-urbanist font-extrabold text-[25px] text-center md:font-bold md:text-[35px] md:text-left">
              Want to Turn Social Media Into a{" "}
              <br className="hidden md:block" />
              Profitable Career?
            </h1>
            <h1 className="font-urbanist font-extrabold text-[25px] text-center text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E] md:text-[35px] md:font-bold md:text-left">
              Discover your way to success <br className="hidden md:block" />{" "}
              with Fametonic:
            </h1>

            <div className="mt-[22px] gap-2.5 text-base font-medium md:mt-[16px] md:gap-[13px]">
              <div className="flex items-center gap-2.5">
                <p className="font-nunito font-medium text-[22px]">✨</p>

                <p className="leading-[22px]">
                  Start growing your influence right away—no waiting required!
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2.5">
                <p className="font-nunito font-medium text-[22px">✨</p>
                <p className="leading-[22px]">
                  Create viral TikToks and Reels step by step with
                  easy-to-follow lessons
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2.5">
                <p className="font-nunito font-medium text-[22px]">✨</p>
                <p className="leading-[22px]">
                  Use a Personal AI Worker to boost your content
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2.5">
                <p className="font-nunito font-medium text-[22px]">✨</p>
                <p className="leading-[22px]">
                  Learn from expert-led courses designed for aspiring
                  influencers
                </p>
              </div>
            </div>
          </section>
          <div className="flex flex-col md:flex-col-reverse">
            <section className="gap-5 px-14 md:p-0 leading-none tracking-normal text-center align-middle text-[#ABABAB] mt-[22px]">
              <p className="font-medium text-xs">
                By clicking &quot;Get Started&quot;, you agree with Terms and
                Conditions, Privacy Policy, Subscription Terms
              </p>
              

              <p className="font-nunito md:font-figtree py-5 text-[10px] md: text-left">
                Fametonic 2025 ©All Rights Reserved.
              </p>
            </section>

            <div className="flex flex-col md:w-[313px] mt-8 md:mt-[30px] text-center">
              <button className="bg-[#FC004E] rounded-[10px] opacity-100 pt-[8px] pr-[40px] pb-[8px] pl-[40px] shadow-[2px_2px_10px_0px_#00E7F9] flex items-center justify-center gap-[10px] w-full h-auto md:w-[313px] md:h-[40px]">
                <span className="md:font-figtree font-urbanist font-bold text-[20px] leading-none tracking-normal align-middle flex gap-2.5">
                  GET STARTED
                  <Image
                    src="/images/vector.svg"
                    width={11}
                    height={6}
                    alt="vector"
                  />
                </span>
              </button>

              <p className="pt-2.5 text-xs">
                1-minute quiz for personalized Insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
