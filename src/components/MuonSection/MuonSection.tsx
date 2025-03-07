import BlackButton from "../common/Buttons/BlackButton";
import MoreButton from "../common/Buttons/MoreButton";

const MuonSection = () => {
  return (
    <div className="font-azeretMono border-b border-darkText pb-[150px] below-1024:hidden">
      <div>
        <BlackButton btnText={"03 // Muon"} />
        {/* <div className="section-title-text">Lorem ipsum Lorem</div> */}
      </div>

      <div className="video-container w-full flex items-center justify-center mt-[127px]">
        <div className="video-box border border-darkText h-[477px] w-full max-w-[940px] above-1440:max-w-[1256px] above-1440:h-[633px] relative">
          <div className="absolute bottom-[0px] right-[4px] above-1440:bottom-[13px] above-1440:right-[13px] w-full">
            <img
              src="./assets/images/button/pluse-1.svg"
              className="absolute right-[25px] bottom-[29px]"
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center mt-4 above-1440:mt-[23px]">
        <div className="w-full max-w-[940px] above-1440:max-w-[1256px] flex items-end justify-end mr-5 1024-1279:mr-3 above-1440:mr-[20px]">
          <div>
            <MoreButton btnText="More about Muon" />
            <div className="mt-2 above-1440:mt-[23px]">
              <MoreButton btnText="Run a node" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuonSection;
