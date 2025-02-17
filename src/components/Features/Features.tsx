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

      <div className="flex w-full justify-between gap-[200px] mt-[70px] relative">
        <div className="border-t border-white w-full relative expand-animation-fast">
          <div className="min-h-[40px] min-w-[40px] above-1024:min-h-[80px] above-1024:min-w-[80px] above-1440:min-w-[92px] above-1440:min-h-[92px] absolute -right-36 -top-10 bg-circle-gradient rounded-full  flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] above-1440:h-[11px] above-1440:w-[11px] bg-orangePrimary z-100 rounded-full"></div>
            <img
              src="./assets/images/features/smallShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute left-2 above-1024:left-[1px] above-1024:min-w-[140px] h-[140px] above-1440:w-[159px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[20px] above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="mb-2">01</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="border-t border-white w-full max-w-[594px] flex items-center justify-center">
          <div className="!text-whiteTextSecond  max-w-[541px] pt-[26px] text-base above-1440:text-[20px] font-normal leading-[28px]">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-[300px] mt-[75px] relative">
        <div className="border-t border-white w-full relative expand-animation-medium">
          <div className="above-1024:min-h-[120px] above-1024:min-w-[120px] min-h-[60px] min-w-[60px] absolute -top-[60px] -right-[210px] bg-circle-gradient  rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
            <img
              src="./assets/images/features/mediumShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute above-1024:-left-[40px] min-w-[100px] above-1024:min-w-[200px] h-[200px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[20px] above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="mb-2">02</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="border-t border-white w-full min-w-[622px] above-1440:min-w-[853px] ">
          <div className="max-w-[541px] text-base above-1440:text-[20px] leading-[28px] font-normal mt-[26px] text-whiteTextSecond  ml-14">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-[340px] mt-[150px] relative">
        <div className="border-t border-white w-full relative expand-animation">
          <div className="min-h-[75px] min-w-[75px] above-1024:min-h-[150px] above-1024:min-w-[150px] bg-circle-gradient absolute -top-[75px] -right-[270px] rounded-full flex items-center justify-center mix-blend-overlay  circle-animation">
            <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
            <img
              src="./assets/images/features/largeShadow.svg"
              alt=""
              className="z-1000 opacity-20 absolute above-1024:-left-[50px] above-1024:-top-5 -top-20 -left-6  min-w-[75px] above:min-w-[170px] h-[280px]"
            />
          </div>
          <div className="text-whiteTextSecond above-1440:pt-[30px] opacity-70 above-1440:opacity-100 pt-[20px] above-1440:text-[20px] leading-[18px] font-azeretMono font-normal">
            <div className="mb-2">03</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>

        <div className="border-t border-white w-full above-1440:min-w-[1007px] min-w-[700px]">
          <div className="max-w-[541px] text-base above-1440:text-[20px] leading-[28px] font-normal mt-[26px] text-whiteTextSecond  ml-14">
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
