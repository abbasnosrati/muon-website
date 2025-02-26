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
      <div className="tag_list scroller__inner w-full">
        <div className="1 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="2 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="3 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="4 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="5 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="6 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="7 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/linea.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="8 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box min-w-full">
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="9 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/eigen.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="1 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="2 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-full"
            />
          </div>
        </div>
        <div className="3 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="4 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="5 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="6 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="7 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/linea.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        <div className="8 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box min-w-full">
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>
        <div className="9 img-container min-w-[25%] md:min-w-[20%] above-1280:min-w-[16%]">
          <div className="img-box">
            <img
              src="./assets/images/partners/eigen.svg"
              className="w-full"
              alt=""
            />
          </div>
        </div>

        {/* <div className="9">
          <div className="">
            <img
              src="./assets/images/partners/zellular logo.svg"
              className=""
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
            />
          </div>
        </div>
        <div className=" ">
          <div className="">
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>
        <div className="img-container below-1024:hidden other-images ">
          <div className="">
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>
        <div className="img-container below-1024:hidden other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>

        <div className="img-container below-1024:hidden other-images  largeImgBottomPadding">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>

        <div className="img-container below-1024:hidden other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[70px] min-h-[20px]">
            <img
              src="./assets/images/partners/linea.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>

        <div className="img-container below-1024:hidden other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>

        <div className="img-container below-1024:hidden other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/eigen.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] h-[20px] ">
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}

        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/arbitrum.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/layerzero.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images largeImgBottomPadding">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/XDC.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/linea.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/avalanche.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
        {/* <div className="img-container other-images ">
          <div className="img-box min-w-[280px] below-1024:min-w-[40px] min-h-[20px]">
            <img
              src="./assets/images/partners/eigen.svg"
              className="w-[110px] below-430:w-[100px] above-1440:w-[580px] "
              alt=""
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Partners;
