interface BtnProps {
  btnText: string;
}
const BlackButton = ({ btnText }: BtnProps) => {
  return (
    <div className="text-white leading-4 text-base font-azeretMono border border-darkText mt-3 h-[47px] w-[364px] flex items-center relative">
      <div className="ml-[22px]">{btnText.toUpperCase()}</div>
      <img
        src="./assets/images/button/btnAngle.svg"
        className="absolute right-2 bottom-2"
      />
    </div>
  );
};

export default BlackButton;