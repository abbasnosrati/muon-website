interface BtnProps {
  btnText: string;
  source?: string;
}
const MoreButton = ({ btnText }: BtnProps) => {
  return (
    <div className="text-darkText above-1440:text-whiteTextSecond leading-4 cursor-pointer text-base font-dmSans border border-darkText above-1440:border-whiteTextSecond  h-[47px] w-[188px] flex items-center pl-[18px] relative">
      <div className="">{btnText}</div>
      <img
        src={`./assets/images/button/pluse.svg`}
        className="absolute right-[10px] bottom-4 above-1440:hidden"
      />
      <img
        src={`./assets/images/button/pluseWhite.svg`}
        className="absolute right-[10px] bottom-4 hidden above-1440:flex"
      />
    </div>
  );
};

export default MoreButton;
