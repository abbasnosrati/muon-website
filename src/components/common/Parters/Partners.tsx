import { useEffect } from "react";

const Partners = () => {
  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const scrolls = document.querySelectorAll(".scroller");
      addAnimation(scrolls);
    }
  }, []);

  const addAnimation = (scrolls: any) => {
    scrolls.forEach((scroller: any) => {
      scroller.setAttribute("data-animated", "true");
    });
  };

  return (
    <div className="scroller absolute left-0 w-full">
      <div className="tag_list scroller__inner w-full ">
        <div className="1 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://zellular.xyz/", "_blank")}
          >
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="2 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://derand.dev/", "_blank")}
          >
            <img
              src="./assets/images/partners/derand.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="3 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.symm.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="4 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://arbitrum.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="5 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://layerzero.network/", "_blank")}
          >
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="6 img-container min-w-[21%] md:min-w-[16%] lg:min-w-[12%]">
          <div
            className="img-box"
            onClick={() => window.open("https://xdc.org/", "_blank")}
          >
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="7 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://linea.build/", "_blank")}
          >
            <img
              src="./assets/images/partners/linea.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="8 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box min-w-full"
            onClick={() => window.open("https://www.avax.network/", "_blank")}
          >
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="9 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://qorpo.world/", "_blank")}
          >
            <img
              src="./assets/images/partners/qorpo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="10 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[17%]">
          <div
            className="img-box"
            onClick={() => window.open("https://app.daomaker.com/", "_blank")}
          >
            <img
              src="./assets/images/partners/daoMaker.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="11 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[12%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.fear.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/fear.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="12 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[12%]">
          <div className="img-box" onClick={() => window.open("", "_blank")}>
            <img
              src="./assets/images/partners/jfl.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="13 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[15%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.arthera.net/", "_blank")}
          >
            <img
              src="./assets/images/partners/arthera.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="14 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[15%]">
          <div
            className="img-box"
            onClick={() => window.open("https://thena.fi/", "_blank")}
          >
            <img
              src="./assets/images/partners/thena.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="1 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://zellular.xyz/", "_blank")}
          >
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="2 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://derand.dev/", "_blank")}
          >
            <img
              src="./assets/images/partners/derand.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="3 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.symm.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="4 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://arbitrum.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="5 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://layerzero.network/", "_blank")}
          >
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="6 img-container min-w-[21%] md:min-w-[16%] lg:min-w-[12%]">
          <div
            className="img-box"
            onClick={() => window.open("https://xdc.org/", "_blank")}
          >
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="7 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://linea.build/", "_blank")}
          >
            <img
              src="./assets/images/partners/linea.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="8 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box min-w-full"
            onClick={() => window.open("https://www.avax.network/", "_blank")}
          >
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="9 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[16%]">
          <div
            className="img-box"
            onClick={() => window.open("https://qorpo.world/", "_blank")}
          >
            <img
              src="./assets/images/partners/qorpo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="10 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[17%]">
          <div
            className="img-box"
            onClick={() => window.open("https://app.daomaker.com/", "_blank")}
          >
            <img
              src="./assets/images/partners/daoMaker.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="11 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[12%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.fear.io/", "_blank")}
          >
            <img
              src="./assets/images/partners/fear.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="12 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[12%]">
          <div className="img-box" onClick={() => window.open("", "_blank")}>
            <img
              src="./assets/images/partners/jfl.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="13 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[15%]">
          <div
            className="img-box"
            onClick={() => window.open("https://www.arthera.net/", "_blank")}
          >
            <img
              src="./assets/images/partners/arthera.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="14 img-container min-w-[35%] md:min-w-[20%] lg:min-w-[15%]">
          <div
            className="img-box"
            onClick={() => window.open("https://thena.fi/", "_blank")}
          >
            <img
              src="./assets/images/partners/thena.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
