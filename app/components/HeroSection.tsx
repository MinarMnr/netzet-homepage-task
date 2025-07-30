import Image from "next/image";
import Hero from "@/public/images/hero.png";

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div className="flex mt-[-90px]">
          <Image src={Hero} className="object-cover" alt="Hero" />
        </div>

        <section className="mt-[-100px] z-10">
          <h1 className="font-urbanist font-extrabold text-[25px] leading-[100%] tracking-normal text-center">
            Want to Turn Social Media Into a Profitable Career?
          </h1>
          <h1 className="font-urbanist font-extrabold text-[25px] leading-[100%] tracking-normal text-center text-[#00E7F9] text-shadow-[0px_4px_4px_#FC004E]">
            Discover your way to success with Fametonic:
          </h1>

          <div className="py-[22px] text-base font-medium">
            <div className="flex items-center gap-2.5">
              <p className="font-nunito text-[22px] leading-[100%] text-center">
                ✨
              </p>
              <p className="font-medium text-base leading-[22px]">
                Start growing your influence right away—no waiting required!
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-2.5">
              <p className="font-nunito text-[22px] leading-[100%] text-center">
                ✨
              </p>
              <p className="font-medium text-base leading-[22px]">
                Create viral TikToks and Reels step by step with easy-to-follow
                lessons
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-2.5">
              <p className="font-nunito text-[22px] leading-[100%] text-center">
                ✨
              </p>
              <p className="font-medium text-base leading-[22px]">
                Use a Personal AI Worker to boost your content
              </p>
            </div>

            <div className="flex items-center gap-2.5 pt-2.5">
              <p className="font-nunito text-[22px] leading-[100%] text-center">
                ✨
              </p>
              <p className="font-medium text-base leading-[22px]">
                Learn from expert-led courses designed for aspiring influencers
              </p>
            </div>
          </div>
        </section>

        <section className="gap-5 px-14 leading-none tracking-normal text-center align-middle text-[#ABABAB]">
          <p className="font-medium text-xs">
            By clicking &quot;Get Started&quot;, you agree with Terms and
            Conditions, Privacy Policy, Subscription Terms
          </p>

          <p className="font-nunito py-5 text-[10px]">
            Fametonic 2025 ©All Rights Reserved.
          </p>
        </section>

        <section className="pt-8">
          <div className="bg-[#FC004E] rounded-[10px] opacity-100 pt-[8px] pr-[40px] pb-[8px] pl-[40px] shadow-[2px_2px_10px_0px_#00E7F9] flex items-center justify-center">
            <span className="font-urbanist font-bold text-[20px] leading-none tracking-normal align-middle flex gap-2.5">
              Get Started
              <Image
                src="/images/vector.svg"
                width={11}
                height={6}
                alt="vector"
              />
            </span>
          </div>
          <p className="pt-2.5 text-xs font-normal leading-[16px] tracking-normal text-center align-middle">
            1-minute quiz for personalized Insights
          </p>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
