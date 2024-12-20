import BlackButton from "../common/Buttons/BlackButton";
import MoreButton from "../common/Buttons/MoreButton";

const MuonSection = () => {
  return (
    <div className="font-azeretMono border-b border-darkText pb-[150px]">
      <div>
        <BlackButton btnText={"02 // Muon"} />
        <div className="section-title-text">Lorem ipsum Lorem</div>
      </div>

      <div className="video-container w-full flex items-center justify-center mt-[105px]">
        <div className="video-box border border-darkText h-[477px] w-full max-w-[940px] relative">
          <div className="absolute bottom-[13px] right-[13px] w-full">
            <img
              src="./assets/images/button/pluse.svg"
              className="absolute right-2 bottom-2"
            />
          </div>
        </div>
      </div>

      <div className=" w-full flex justify-center items-center mt-4">
        <div className="w-full max-w-[940px] flex items-end justify-end mr-5">
          <div>
            <MoreButton btnText="More about Muon" />
            <div className="mt-2">
              <MoreButton btnText="Run a node" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MuonSection;
