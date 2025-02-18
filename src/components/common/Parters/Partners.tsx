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
    <div className="scroller absolute left-0">
      <div className="tag_list scroller__inner">
        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] h-[20px] ">
            <img
              src="./assets/images/partners/zellular logo.svg"
              className="w-[110px] above-1440:w-[270px]"
              alt=""
            />
          </div>
        </div>
        <div className="img-container other-images ">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              className="w-[110px] above-1440:w-[270px]"
              alt=""
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] ml-5 min-h-[20px]">
            <img
              src="./assets/images/partners/thena.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
        <div className="img-container other-images">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/symmio.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>

        <div className="img-container zelullar_img ">
          <div className="img-box min-w-[130px] min-h-[20px]">
            <img
              src="./assets/images/partners/zellular logo.svg"
              alt=""
              className="w-[110px] above-1440:w-[270px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
