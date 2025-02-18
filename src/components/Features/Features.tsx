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
        <div className="border-t border-white w-full relative expand-animation-fast">
          <div className="min-h-[40px] min-w-[40px] custom-1280:min-h-[80px] custom-1280:min-w-[80px] above-1440:min-w-[92px] above-1440:min-h-[92px] absolute  1024-1279:-right-12 1024-1279:-top-6 -right-36 -top-10 bg-circle-gradient rounded-full  flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] above-1440:h-[11px] above-1440:w-[11px] bg-orangePrimary z-100 rounded-full"></div>
            <img
              src="./assets/images/features/smallShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute left-2 custom-1280:left-[1px] custom-1280:min-w-[140px] h-[140px] above-1440:w-[159px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[10px] above-1280:pt-[20px] text-[10px] 1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="above-1280:mb-2">01</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="border-t border-white w-full max-w-[594px] flex items-center justify-center">
          <div className="!text-whiteTextSecond max-w-[541px] pt-[10px] above-1280:pt-[26px]   1024-1279:pt-[10px] text-[10px] 1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] font-normal leading-[28px]">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-[300px] 1024-1279:gap-[130px] mt-[75px] custom-1440:mt-[150px] above-1440:mt-[75px] custom-1280:mt-[150px] relative">
        <div className="border-t border-white w-full relative expand-animation-medium">
          <div className="custom-1280:min-h-[120px] custom-1280:min-w-[120px] min-h-[60px] min-w-[60px] absolute  1024-1279:-top-[30px]  1024-1279:-right-[100px] -top-[60px] -right-[210px] bg-circle-gradient  rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
            <img
              src="./assets/images/features/mediumShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute custom-1280:-left-[40px] min-w-[100px] custom-1280:min-w-[200px] h-[200px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[10px] above-1280:pt-[20px] text-[10px]  1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="above-1280:mb-2">02</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="border-t border-white w-full min-w-[622px] above-1440:min-w-[853px] 1024-1279:min-w-[400px]">
          <div className="max-w-[541px] text-[10px]  1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[28px] font-normal mt-[10px] above-1280:mt-[26px]   1024-1279:mt-[10px] text-whiteTextSecond  ml-14   1024-1279:ml-2">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-[310px] 1024-1279:gap-[135px] 1024-1279:mt-[100px] mt-[150px] relative">
        <div className="border-t border-white w-full relative expand-animation">
          <div className="min-h-[75px] min-w-[75px] custom-1280:min-h-[150px] custom-1280:min-w-[150px] bg-circle-gradient absolute  1024-1279:-top-[38px]  1024-1279:-right-[100px] -top-[75px] -right-[250px] rounded-full flex items-center justify-center mix-blend-overlay  circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
            <img
              src="./assets/images/features/largeShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute custom-1280:-left-[50px] custom-1280:-top-5 -top-20 -left-6  min-w-[75px] above:min-w-[170px] h-[280px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[10px] above-1280:pt-[20px] text-[10px]  1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="above-1280:mb-2">03</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>

        <div className="border-t border-white w-full above-1440:min-w-[1007px] min-w-[600px] 1024-1279:min-w-[580px]">
          <div className="max-w-[541px] text-[10px] 1024-1279:text-[12px] custom-1440:text-base above-1440:text-[20px] leading-[28px] font-normal mt-[10px] above-1280:mt-[26px] 1024-1279:mt-[10px] text-whiteTextSecond  ml-14  1024-1279:ml-2">
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
