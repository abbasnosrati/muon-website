import { menuItems } from "../../constants/constants";

const Footer = () => {
  return (
    <div className="font-azeretMono pb-[30px]">
      <div className="top-side border-t border-darkText flex">
        <div className="right-side pb-2 border-r border-darkText text-darkTextOpacity pt-[18px] pr-[38px] w-full max-w-[364px] h-[226px] flex flex-col justify-between">
          <div className="ml-6 leading-[18px] opacity-70 max-w-[200px]">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </div>
          <div className="ml-6 border border-darkText w-[300px] h-12 "></div>
        </div>
        <div className="left-side pl-[52px] pt-[36px] text-darkTextOpacity opacity-70 w-full">
          <div className="flex flex-col">
            {menuItems.map((item, index) => (
              <div className="flex" key={index}>
                <div>{item.title}</div>
                <div className="flex gap-5 ml-[44px]">
                  {item.subItems.length > 0 &&
                    item.subItems.map((sub, index) => (
                      <div key={index}>{sub}</div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-end ">
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
