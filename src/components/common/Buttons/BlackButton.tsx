interface BtnProps {
  btnText: string;
  btnNum: string;
}
const BlackButton = ({ btnText, btnNum }: BtnProps) => {
  return (
    <div className="text-whiteTextSecond px-[30px] flex justify-between above-1440:opacity-100 opacity-90 tracking-[2px]  select-none !leading-[18px] text-sm lg:text-base above-1440:text-[20px] font-medium font-azeretMono border border-darkText mt-4 h-[47px] above-1440:h-[60px] w-full max-w-[364px] above-1440:max-w-[484px] items-center relative">
      <div>{btnNum}//</div>
      <div>{btnText}</div>
      {/* <img
        src="./assets/images/button/btnAngle.svg"
        className="absolute right-2 bottom-2"
      /> */}
    </div>
  );
};

export default BlackButton;
