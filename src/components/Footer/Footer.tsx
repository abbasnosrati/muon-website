import { menuItems } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="font-azeretMono pb-[30px]">
      <div className="top-side border-t border-darkText flex flex-col lg:flex-row">
        <div className="right-side pb-2 lg:border-r border-darkText text-darkTextOpacity pt-[18px] lg:pr-[38px] w-full max-w-[364px] h-[150px] lg:h-[226px] flex flex-col justify-between">
          <div className="lg:ml-6 leading-[18px] opacity-70 max-w-[200px]">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          <div className="lg:ml-6 border border-darkText w-full max-w-[300px] h-12 "></div>
        </div>
        <div className="left-side text-[12px] lg:text-base lg:pl-[52px] pt-[36px] text-darkTextOpacity opacity-70 w-full">
          <div className="flex flex-col gap-1">
            {menuItems.map((item, index) => (
              <div className="flex" key={index}>
                <div className="cursor-pointer">{item.title}</div>
                <div className="flex gap-5 ml-[44px]">
                  {item.subItems.length > 0 &&
                    item.subItems.map((sub, index) => (
                      <div className="cursor-pointer" key={index}>
                        {sub}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col items-end ">
            <div className="flex w-full justify-end">
              <div className="social-media">Twitter</div>
            </div>
            <div className="flex gap-[6px] my-[6px] justify-end">
              <div className="social-media">Github</div>
              <div className="social-media">Discord</div>
              <div className="social-media">Medium</div>
            </div>
            <div className="flex gap-[6px] justify-end ">
              <div className="social-media ">Telegram</div>
              <div className="w-[160px] h-[34px] "></div>
              <div className="w-[160px] h-[34px]"></div>
            </div>
          </div>

          <div className="flex lg:hidden gap-2 mt-5 flex-wrap">
            <div className="social-media">Twitter</div>
            <div className="social-media">Github</div>
            <div className="social-media">Discord</div>
            <div className="social-media">Medium</div>

            <div className="social-media ">Telegram</div>
          </div>
        </div>
      </div>
      <div className="bottom-side border-t border-darkText mt-10 flex items-end justify-between">
        <div className="w-full">
          <img src="./assets/images/logo/muonFooterLogo.svg" alt="" />
        </div>
        <div className="font-azeretMono text-[10px] flex items-end justify-end text-darkText leading-[11px] h-[33px] border-l border-darkText w-full max-w-[330px]">
          copy right 2025
        </div>
      </div>
    </div>
  );
};

export default Footer;
