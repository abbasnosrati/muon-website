interface BtnProps {
  btnText: string;
  source?: string;
}
const MoreButton = ({ btnText }: BtnProps) => {
  return (
    <div className="text-darkText test justify-between font-light font-azeretMono above-1440:text-whiteTextSecond leading-4 cursor-pointer text-base above-1440:text-[18px] border border-darkText above-1440:border-whiteTextSecond  h-[47px] w-[188px] above-1440:w-[252px] above-1440:h-[55px] flex items-center px-[24px] relative">
      <div className="">{btnText}</div>
      <img
        src={`./assets/images/button/pluse.svg`}
        className="above-1440:hidden"
      />
      <img
        src={`./assets/images/button/pluseWhite.svg`}
        className="hidden above-1440:flex"
      />
    </div>
  );
};

export default MoreButton;
