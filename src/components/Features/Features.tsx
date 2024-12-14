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

      <div className="features-box gap-8 custom-1024:gap-2 above-1024:gap-8">
        <div className="features w-full">
          <div className="flex relative items-center gap-3 above-1024:gap-8 ">
            <div className="h-[1px] bg-white w-[178px] expand-animation-fast"></div>
            <div className="min-h-[40px] min-w-[40px] above-1024:min-h-[80px] above-1024:min-w-[80px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/smallShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute left-2 above-1024:-left-[6px] above-1024:min-w-[140px] h-[140px]"
              />
            </div>
            <div className="text-white features-title absolute top-5 lg:top-12">
              <div>01</div>
              <div>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="feature-items w-full lg:max-w-[440px] delayed-animation">
          <div className="feature-items-description">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="features-box gap-10 custom-1024:gap-5 above-1024:gap-10">
        <div className="features w-full lg:max-w-[500px]">
          <div className="flex relative gap-5 above-1024:gap-11 items-center">
            <div className="h-[1px] bg-white w-[330px] expand-animation-medium"></div>
            <div className="above-1024:min-h-[120px] above-1024:min-w-[120px] min-h-[60px] min-w-[60px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/mediumShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute above-1024:-left-[40px] min-w-[100px] above-1024:min-w-[200px] h-[200px]"
              />
            </div>
            <div className="text-white features-title absolute top-8 lg:top-16 ">
              <div>02</div>
              <div>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="feature-items w-full lg:max-w-[700px] delayed-animation-medium">
          <div className="feature-items-description">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="features-box gap-16 custom-1024:gap-0 above-1024:gap-16">
        <div className="features w-full  lg:max-w-[350px] ">
          <div className="flex relative items-center gap-6 above-1024:gap-16">
            <div className="h-[1px] bg-white w-[230px] expand-animation"></div>
            <div className="min-h-[75px] min-w-[75px] above-1024:min-h-[150px] above-1024:min-w-[150px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay  circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/largeShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute above-1024:-left-[50px] above-1024:-top-5 -top-20 -left-6  min-w-[75px] above:min-w-[170px] h-[280px]"
              />
            </div>
            <div className="text-white features-title absolute top-10 lg:top-20">
              <div>03</div>
              <div>Lorem Ipsum</div>
            </div>
          </div>
        </div>
        <div className="feature-items w-full lg:max-w-[700px] delayed-animation-fast">
          <div className="feature-items-description">
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
