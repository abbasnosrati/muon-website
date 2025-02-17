import { menuItems } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="font-azeretMono pb-[30px]">
      <div className="top-side border-t border-darkText flex flex-col lg:flex-row  justify-between pt-[28px]">
        <div className="right-side ite pb-2 w-full  text-whiteTextSecond pt-[18px] lg:pr-[38px]  flex flex-col justify-between">
          <div className="leading-[18px] above-1440:leading-[28px] opacity-70 w-[392px] above-1440:w-[497px] above-1440:text-[20px]">
            Verify, process & access your critical app-data on a permissionless
            oracle network and enjoy its fast modular security architecture.‍
          </div>
          <div className=" border border-darkText w-full max-w-[300px] h-12 mb-6"></div>
        </div>
        <div className="left-side text-[12px] lg:text-base lg:pl-[140px] pt-[20px] text-darkText w-full">
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <div className="flex" key={index}>
                {item.title !== "Socials" && (
                  <div className="flex">
                    <div className="cursor-pointer">{item.title}</div>
                    <div className="flex gap-5 ml-[44px]">
                      {item.subItems.length > 0 &&
                        item.title != "Socials" &&
                        item.subItems.map((sub, index) => (
                          <div className="cursor-pointer" key={index}>
                            {sub}
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col items-end ">
            <div className="flex w-full justify-end">
              <div className="social-media">X</div>
            </div>
            <div className="flex gap-[6px] above-1440:gap-[8px] my-[6px] above-1440:my-[13px] justify-end">
              <div className="social-media">Github</div>
              <div className="social-media">Discord</div>
              <div className="social-media">Medium</div>
            </div>
            <div className="flex gap-[6px] justify-start w-full">
              <div className="social-media above-1440:ml-[4px]">Telegram</div>
            </div>
          </div>

          <div className="flex lg:hidden gap-2 mt-5 flex-wrap">
            <div className="social-media">X</div>
            <div className="social-media">Github</div>
            <div className="social-media">Discord</div>
            <div className="social-media">Medium</div>

            <div className="social-media ">Telegram</div>
          </div>
        </div>
      </div>
      <div className="bottom-side border-t border-darkText mt-10 flex items-end justify-between">
        <div className="w-full border-r border-darkText opacity-70 pt-[36px]">
          <img
            src="./assets/images/logo/footer-logo.svg"
            className="above-1440:flex hidden"
            alt=""
          />
          <img
            src="./assets/images/logo/footer-logo-sm.svg"
            className="flex above-1440:hidden"
            alt=""
          />
        </div>
        <div className="font-azeretMono text-[12px] above-1440:text-base flex w-full above-1440:max-w-[380px]  max-w-[300px] items-end  justify-center text-darkText leading-[11px] ">
          copy right 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
