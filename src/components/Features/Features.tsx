import BlackButton from "../common/Buttons/BlackButton";

const Features = () => {
  return (
    <div className="font-azeretMono text-base border-b border-b-darkText pb-[200px]">
      <div>
        <BlackButton btnText={"01 // FEATURES"} />
        <div className="section-title-text">
          Verify, process & access your critical app-data on a permissionless
          oracle network and enjoy its fast modular security architecture.‍
        </div>
      </div>

      <div className="features mb-10">
        <div className="w-[280px] ease-in-out hover:w-[50%] transition-all duration-1000 h-[260px] flex items-center">
          <div className="bg-white h-[1px] w-full flex items-center justify-end ">
            <div className="h-[80px] w-[80px] bg-black rounded-full relative flex items-center justify-center">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 absolute rounded-full"></div>
              <img
                src="./assets/images/features/smallShadow.svg"
                alt=""
                width="140px"
                height="140px"
                className="z-1000 opacity-20 absolute left-5"
              />
            </div>
          </div>
        </div>
        <div className="text-white -mt-28">
          <div>01</div>
          <div>Lorem Ipsum</div>
        </div>
      </div>

      <div className="features mb-16">
        <div className="w-[730px] ease-in-out hover:w-[50%] transition-all duration-1000 h-[260px] flex items-center">
          <div className="bg-white h-[1px] w-full flex items-center justify-end ">
            <div className="h-[120px] w-[120px] bg-black rounded-full relative flex items-center justify-center">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 absolute rounded-full"></div>
              <img
                src="./assets/images/features/smallShadow.svg"
                alt=""
                width="140px"
                height="140px"
                className="z-1000 opacity-20 absolute left-8"
              />
            </div>
          </div>
        </div>
        <div className="text-white -mt-28">
          <div>02</div>
          <div>Lorem Ipsum</div>
        </div>
      </div>

      <div className="features ">
        <div className="w-[450px] ease-in-out hover:w-[50%] transition-all duration-1000 h-[260px] flex items-center">
          <div className="bg-white h-[1px] w-full flex items-center justify-end ">
            <div className="h-[150px] w-[150px] bg-black rounded-full relative flex items-center justify-center">
              <div className="h-[10px] w-[10px] bg-orangePrimary z-100 absolute rounded-full"></div>
              <img
                src="./assets/images/features/smallShadow.svg"
                alt=""
                width="140px"
                height="140px"
                className="z-1000 opacity-20 absolute left-11"
              />
            </div>
          </div>
        </div>
        <div className="text-white -mt-28">
          <div>03</div>
          <div>Lorem Ipsum</div>
        </div>
      </div>
    </div>
  );
};

export default Features;
