import { useEffect, useRef } from "react";
import BlackButton from "../common/Buttons/BlackButton";

const Features = () => {
  const elementsToAnimate = useRef<NodeListOf<Element> | null>(null);

  useEffect(() => {
    elementsToAnimate.current = document.querySelectorAll(
      ".circle-animation, .expand-animation, .expand-animation-fast, .expand-animation-medium, .delayed-animation, .delayed-animation-fast, .delayed-animation-medium"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementsToAnimate.current) {
      elementsToAnimate.current.forEach((element: any) => {
        const target = element as HTMLElement;
        target.style.animationPlayState = "paused";
        observer.observe(target);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-azeretMono text-base border-b border-b-darkText padding-between-section">
      <div>
        <BlackButton btnText={"01 // FEATURES"} />
        <div className="section-title-text">
          Verify, process & access your critical app-data on a permissionless
          oracle network and enjoy its fast modular security architecture.‍
        </div>
      </div>

      <div className="flex w-full justify-between gap-[200px] 1024-1279:gap-[60px] mt-[70px] relative">
        <div className="border-t border-whiteTextSecond w-full relative expand-animation-fast">
          <div className="min-h-[40px] min-w-[40px] custom-1280:min-h-[80px] custom-1280:min-w-[80px] above-1440:min-w-[92px] above-1440:min-h-[92px] absolute  1024-1279:-right-12 1024-1279:-top-6 -right-36 -top-10 bg-circle-gradient rounded-full  flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] above-1440:h-[11px] above-1440:w-[11px] bg-orangePrimary z-100 rounded-full"></div>
            <img
              src="./assets/images/features/smallShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute left-2 custom-1280:left-[1px] custom-1280:min-w-[140px] h-[140px] above-1440:w-[159px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[10px] above-1280:pt-[20px] text-[10px] 1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[18px] font-azeretMono font-light">
            <div className="above-1280:mb-2 leading-[18px]">01</div>
            <div className="leading-[18px]">Lorem Ipsum</div>
          </div>
        </div>
        <div className="border-t border-whiteTextSecond w-full max-w-[594px] flex items-center justify-center">
          <div className="!text-whiteTextSecond max-w-[541px] pt-[10px] ml-14 above-1280:pt-[26px] 1024-1279:pt-[10px] text-[10px] 1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] font-light !leading-[28px]">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex  flex-col lg:flex-row w-full justify-between custom-1920:gap-[200px] custom-1440:gap-[152px] 1024-1439:gap-[110px] 1024-1439:mt-[100px]  mt-[75px] custom-1440:mt-[75px] relative">
        <div className="border-t border-white w-full relative expand-animation-medium">
          <div className="right-0 -top-[38px] custom-1920:min-h-[120px] custom-1920:min-w-[119px] custom-1440:min-h-[91px] custom-1440:min-w-[91px] absolute custom-1440:-top-[50px] custom-1440:-right-[120px] custom-1920:-top-[60px] custom-1920:-right-[160px] bg-circle-gradient  rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
            <img
              src="./assets/images/features/mediumShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute custom-1440:-left-[30px] min-w-[100px] custom-1920:min-w-[196px] custom-1440:min-w-[153px] h-[200px]"
            />
          </div>
          <div className="text-whiteTextSecond custom-1920:pt-[30px] opacity-70 custom-1920:opacity-100 pt-[10px] above-1280:pt-[20px] text-[14px]  1024-1439:text-[12px] custom-1440:text-base custom-1920:text-[20px] leading-[18px] font-azeretMono font-light">
            <div className="above-1280:mb-2 leading-[18px]">02</div>
            <div className="leading-[18px]">Lorem Ipsum</div>
          </div>
        </div>
        <div className="lg:border-t lg:border-whiteTextSecond w-full min-w-[622px] custom-1440:min-w-[600px] 1024-1279:min-w-[400px] custom-1920:min-w-[880px]">
          <div className="lg:max-w-[541px] text-[12px] 1024-1439:text-[12px] custom-1440:text-base custom-1920:text-[20px] !leading-[28px] font-light mt-[10px] above-1280:mt-[26px] 1024-1439:mt-[10px] text-whiteTextSecond 1024-1439:ml-14 custom-1440:ml-14 custom-1920:ml-14">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full justify-between custom-1440:gap-[222px] custom-1920:gap-[295px] 1024-1439:gap-[110px] 1024-1439:mt-[100px] mt-[150px] relative">
        <div className="border-t border-whiteTextSecond w-full relative expand-animation">
          <div className="right-0 -top-[38px] min-h-[75px] min-w-[75px] custom-1920:min-h-[156px] custom-1920:min-w-[158px] custom-1440:min-h-[117px] custom-1440:min-w-[118px] bg-circle-gradient absolute 1024-1439:-top-[38px] 1024-1439:-right-[94px] custom-1920:-top-[75px] custom-1920:-right-[228px] custom-1440:-top-[58px] custom-1440:-right-[172px] rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full"></div>
            <img
              src="./assets/images/features/largeShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute custom-1920:-left-[64px] custom-1920:-top-[72px] 1024-1439:-left-[14px] 1024-1439:-top-[110px] custom-1440:-left-[50px] custom-1440:-top-[89px] -top-26 -left-4  min-w-[105px] custom-1920:min-w-[290px] h-[296px] custom-1440:min-h-[219px] custom-1440:min-w-[219px]"
            />
          </div>
          <div className="text-whiteTextSecond custom-1920:pt-[30px] opacity-70 custom-1920:opacity-100 pt-[10px] above-1280:pt-[20px] text-[14px]  1024-1439:text-[12px] custom-1440:text-base custom-1920:text-[20px] leading-[18px] font-azeretMono font-light">
            <div className="above-1280:mb-2 leading-[18px]">03</div>
            <div className="leading-[18px]">Lorem Ipsum</div>
          </div>
        </div>

        <div className="lg:border-t lg:border-whiteTextSecond w-full custom-1920:min-w-[1007px] lg:min-w-[600px] 1024-1439:min-w-[685px] custom-1440:min-w-[720px]">
          <div className="lg:max-w-[541px] text-[12px] 1024-1439:text-[12px] custom-1440:text-base custom-1920:text-[20px] !leading-[28px] font-light mt-[10px] above-1280:mt-[26px] 1024-1439:mt-[10px] text-whiteTextSecond 1024-1439:ml-14 custom-1440:ml-14 custom-1920:ml-14">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
