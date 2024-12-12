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
    <div className="font-azeretMono text-base border-b border-b-darkText pb-[200px]">
      <div>
        <BlackButton btnText={"01 // FEATURES"} />
        <div className="section-title-text">
          Verify, process & access your critical app-data on a permissionless
          oracle network and enjoy its fast modular security architecture.‍
        </div>
      </div>

      <div className="flex items-center w-full gap-8">
        <div className="features w-full ">
          <div className="flex items-center gap-8">
            <div className="h-[1px] bg-white w-[178px] expand-animation-fast"></div>
            <div className="min-h-[80px] min-w-[80px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/smallShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute -left-[6px] min-w-[140px] h-[140px]"
              />
            </div>
          </div>
          <div className="text-white ">
            <div>01</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="font-azeretMono leading-4 flex items-center max-w-[440px] border-t border-white w-full mt-28 delayed-animation">
          <div className="pt-[40px] text-base font-normal w-full max-w-[440px]">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex items-center w-full gap-10">
        <div className="features w-full max-w-[500px]">
          <div className="flex items-center gap-10">
            <div className="h-[1px] bg-white w-[330px] expand-animation-medium"></div>
            <div className="min-h-[120px] min-w-[120px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/mediumShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute -left-[40px] min-w-[200px] h-[200px]"
              />
            </div>
          </div>
          <div className="text-white">
            <div>02</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="font-azeretMono leading-4 flex items-center  border-t border-white w-full max-w-[700px]  mt-28 delayed-animation-medium">
          <div className="pt-[40px] text-base font-normal w-full max-w-[440px]">
            Muon network enjoys a multi-layered security model made up of a TSS
            network, a Shield Server, and an Eigen Layer node. Based on your
            needs, you can choose one or a combination.
          </div>
        </div>
      </div>

      <div className="flex items-center w-full gap-16">
        <div className="w-full max-w-[350px] ">
          <div className="flex items-center gap-16">
            <div className="h-[1px] bg-white w-[230px] expand-animation"></div>
            <div className="min-h-[150px] min-w-[150px] bg-circle-gradient relative rounded-full flex items-center justify-center mix-blend-overlay  circle-animation">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 rounded-full "></div>
              <img
                src="./assets/images/features/largeShadow.svg"
                alt=""
                className="z-1000 opacity-20 absolute -left-[62px] -top-4 min-w-[170px] h-[280px]"
              />
            </div>
          </div>
          <div className="text-white">
            <div>03</div>
            <div>Lorem Ipsum</div>
          </div>
        </div>
        <div className="font-azeretMono leading-4 flex items-center border-t border-white w-full max-w-[700px]  mt-28 delayed-animation-fast">
          <div className="pt-[40px] text-base font-normal w-full max-w-[440px]">
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
