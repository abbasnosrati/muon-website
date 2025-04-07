import { menuItems, scrollToSection } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="font-azeretMono pb-[30px]">
      <div className="top-side border-t border-darkText flex flex-col lg:flex-row justify-between pt-[8px]">
        <div className="right-side ite pb-2 text-whiteTextSecond pt-[18px] lg:pr-[38px] flex flex-col justify-between">
          <div className="leading-[26px] text-whiteText above-1440:leading-[36px]  w-[560px] above-1440:w-[700px] lg:text-[20px] above-1440:text-[25px] below-1024:text-[12px] below-1024:w-full below-1024:mb-5">
            Join the Muon Ecosystem and enjoy using its tamper-resistant proofs
            on any chain. 
          </div>
          {/* <div className=" below-1024:hidden border border-darkText w-full max-w-[300px] above-1440:max-w-[400px] above-1440:h-[59px] h-12 mb-7"></div> */}
        </div>
        <div className="left-side text-[12px] above-1024:text-base above-1440:text-[20px] font-light !leading-[18px] above-1024:pl-[140px] pt-[20px] text-darkText">
          <div className="flex flex-col gap-[18px] above-1440:gap-[24px] below-1024:gap-[10px] above-1440:mt-14">
            {menuItems.map((item, index) => (
              <div className="flex" key={index}>
                {item.title !== "Socials" && (
                  <div className="flex items-center">
                    <div
                      className="cursor-pointer font-azeretMono  font-medium text-sm above-1440:text-[18px] tracking-[2px]"
                      onClick={
                        item.src.length < 2
                          ? () => scrollToSection(item.src)
                          : () => window.open(item.src, "_blank")
                      }
                    >
                      {item.title}
                    </div>
                    <div className="flex gap-6 below-1024:gap-3 ml-[30px] below-1024:ml-[25px]">
                      {item.subItems.length > 0 &&
                        item.title != "Socials" &&
                        item.subItems.map((sub, index) => (
                          <div
                            className="cursor-pointer text-sm above-1440:text-[18px] font-medium below-1024:text-[12px]"
                            key={index}
                            onClick={() => window.open(sub.src, "_blank")}
                          >
                            {sub.title}
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
              <div
                onClick={() =>
                  window.open("https://Github.com/muon-protocol", "_blank")
                }
                className="social-media footer-social"
              >
                Github
              </div>
            </div>
            <div className="flex gap-[6px] above-1440:gap-[8px] my-[6px] above-1440:my-[13px] justify-end">
              <div
                onClick={() => window.open("https://x.com/muon_net", "_blank")}
                className="social-media footer-social"
              >
                X
              </div>
              <div
                onClick={() =>
                  window.open("https://discord.gg/muonnetwork", "_blank")
                }
                className="social-media footer-social"
              >
                Discord
              </div>
              <div
                onClick={() =>
                  window.open("https://docs.muon.net/muon-network", "_blank")
                }
                className="social-media footer-social"
              >
                Medium
              </div>
            </div>
            <div
              onClick={() => window.open("https://t.me/muon_net", "_blank")}
              className="flex justify-start w-full"
            >
              <div className="social-media footer-social">Telegram</div>
            </div>
          </div>

          <div className="flex lg:hidden gap-2 mt-5 flex-wrap">
            <div
              onClick={() => window.open("https://x.com/muon_net", "_blank")}
              className="social-media"
            >
              X
            </div>
            <div
              onClick={() =>
                window.open("https://Github.com/muon-protocol", "_blank")
              }
              className="social-media"
            >
              Github
            </div>
            <div
              onClick={() =>
                window.open("https://discord.gg/muonnetwork", "_blank")
              }
              className="social-media"
            >
              Discord
            </div>
            <div
              onClick={() =>
                window.open("https://docs.muon.net/muon-network", "_blank")
              }
              className="social-media"
            >
              Medium
            </div>

            <div
              onClick={() => window.open("https://t.me/muon_net", "_blank")}
              className="social-media "
            >
              Telegram
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-side border-t border-darkText mt-7 flex items-end justify-between">
        <div className="w-full border-r border-darkText opacity-70 pt-[36px] pr-[55px] below-1024:pt-4 below-1024:pr-10">
          <img
            src="./assets/images/logo/footer-logo.svg"
            className="opacity-60"
            alt=""
          />
        </div>
        <div className="font-azeretMono text-[12px] below-1024:hidden below-1024:text-[10px] above-1440:text-base flex w-full above-1440:max-w-[380px]  max-w-[300px] items-end  justify-center text-darkText leading-[11px] ">
          © 2025 Muon, ALL RIGHTS RESERVED.
        </div>

        <div className="font-azeretMono pl-4 text-[12px] lg:hidden below-1024:text-[10px] above-1440:text-base  w-full above-1440:max-w-[380px]  max-w-[300px] items-end  justify-center text-darkText leading-[11px] ">
          <p>© 2025 Muon</p>
          <p className="mt-1">ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
