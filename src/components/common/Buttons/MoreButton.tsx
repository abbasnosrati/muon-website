interface BtnProps {
  btnText: string;
  source?: string;
}
const MoreButton = ({ btnText }: BtnProps) => {
  return (
    <div className="test justify-between  font-light font-azeretMono text-whiteTextSecond leading-4 cursor-pointer text-nowrap text-sm above-1440:text-[18px] border border-whiteTextSecond  h-[47px] w-[188px] above-1440:w-[252px] above-1440:h-[55px] flex items-center above-1440:px-[24px] px-[18px] relative">
      <div className="">{btnText}</div>

      <img src={`./assets/images/button/pluseWhite.svg`} />
    </div>
  );
};

export default MoreButton;
