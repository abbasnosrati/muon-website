interface BtnProps {
  btnText: string;
}
const BlackButton = ({ btnText }: BtnProps) => {
  return (
    <div className="text-whiteTextSecond above-1440:opacity-100 opacity-70  select-none !leading-[18px] text-base above-1440:text-[20px] font-light font-azeretMono border border-darkText mt-4 h-[47px] above-1440:h-[60px] w-full max-w-[364px] above-1440:max-w-[484px] flex items-center relative">
      <div className="ml-[29px] mt-[10px]">{btnText.toUpperCase()}</div>
      <img
        src="./assets/images/button/btnAngle.svg"
        className="absolute right-2 bottom-2"
      />
    </div>
  );
};

export default BlackButton;
