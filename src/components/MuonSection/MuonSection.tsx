import BlackButton from "../common/Buttons/BlackButton";
import MoreButton from "../common/Buttons/MoreButton";

const MuonSection = () => {
  return (
    <div className="font-azeretMono border-b border-darkText pb-[150px] below-1024:hidden">
      <div>
        <BlackButton btnNum={"03"} btnText={"What is Muon"} />
      </div>

      <div className=" w-full flex justify-center items-center mt-4 above-1440:mt-[23px]">
        <div className="w-full max-w-[940px] above-1440:max-w-[1256px] flex items-end justify-end mr-5 1024-1279:mr-3 above-1440:mr-[20px]">
          <div>
            <div
              onClick={() =>
                window.open(
                  "https://github.com/muon-protocol/muon-node-js/blob/testnet/src/built-in-apps/app-deployment.js",
                  "_blank"
                )
              }
              className="group-hover w-full set-zIndex btn flex relative hover:text-darkText transition-all duration-300 hover-div ease-in-out"
            >
              <span className="z-50 opacity-90 text-sm xl:text-base above-1440:text-[18px] font-medium transition-all duration-300 ease-in-out  group-hover:delay-500">
                Run a Node
              </span>
              <svg
                width="33"
                height="6"
                viewBox="0 0 33 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-fill-color"
              >
                <path d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" />
              </svg>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://github.com/muon-protocol/muon-node-js/blob/testnet/src/built-in-apps/app-deployment.js",
                  "_blank"
                )
              }
              className="group-hover w-full set-zIndex btn flex relative hover:text-darkText transition-all duration-300 hover-div ease-in-out"
            >
              <span className="z-50 opacity-90 text-sm xl:text-base above-1440:text-[18px] font-medium transition-all duration-300 ease-in-out  group-hover:delay-500">
                More about Muon
              </span>
              <svg
                width="33"
                height="6"
                viewBox="0 0 33 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-fill-color ml-2"
              >
                <path d="M33 3L28 0.113251L28 5.88675L33 3ZM-4.37114e-08 3.5L28.5 3.5L28.5 2.5L4.37114e-08 2.5L-4.37114e-08 3.5Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuonSection;
