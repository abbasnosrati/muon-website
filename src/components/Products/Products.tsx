import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
import Partners from "../common/Parters/Partners";

const Products = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="pb-[270px] border-b border-b-darkText">
      <div>
        <BlackButton btnText="03 // Products" />
        <div className="section-title-text">
          Verify, process & access your critical app-data on a permissionless
          oracle network and enjoy its fast modular security architecture.‍
        </div>
      </div>
      <div className="collapse-container mt-28 select-none">
        <div className="collapse-box-1 ">
          <div className="collapse-title" onClick={() => setSelectedItem(0)}>
            Derand
          </div>
          <div
            className={`collapse-content pr-14 font-azeretMono text-darkTextOpacity ${
              selectedItem === 0 ? "h-[243px]" : "h-0 border-none"
            }`}
          >
            <div className="flex h-full w-full">
              <div className="left-side w-[70%]"></div>
              <div className="right-side w-[24%] min-w-[24%] flex flex-col gap-5 justify-center">
                <div className="font-azeretMono text-darkTextOpacity leading-5 opacity-70">
                  Verify, process & access your critical app-data on
                  a permissionless oracle network and enjoy its fast modular
                  security architecture.‍
                </div>
                <div className="border border-darkText flex items-center w-full max-w-[364px] h-[47px] justify-between pl-3 pr-8">
                  <div>Visit Site</div>
                  <svg
                    width="66"
                    height="8"
                    viewBox="0 0 66 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65.3536 4.35355C65.5488 4.15829 65.5488 3.84171 65.3536 3.64645L62.1716 0.464466C61.9763 0.269204 61.6597 0.269204 61.4645 0.464466C61.2692 0.659728 61.2692 0.976311 61.4645 1.17157L64.2929 4L61.4645 6.82843C61.2692 7.02369 61.2692 7.34027 61.4645 7.53553C61.6597 7.7308 61.9763 7.7308 62.1716 7.53553L65.3536 4.35355ZM0 4.5H65V3.5H0V4.5Z"
                      fill="#242424"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse-box-2">
          <div className="collapse-title" onClick={() => setSelectedItem(1)}>
            Metabridge
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 1 ? "h-[243px]" : "h-0 border-none"
            }`}
          ></div>
        </div>
        <div className="collapse-box-3 ">
          <div className="collapse-title" onClick={() => setSelectedItem(2)}>
            Price feed
          </div>
          <div
            className={`collapse-content ${
              selectedItem === 2 ? "h-[243px]" : "h-0 border-none"
            }`}
          ></div>
        </div>
      </div>
      <div className="mt-[200px]">
        <Partners />
      </div>
    </div>
  );
};

export default Products;
