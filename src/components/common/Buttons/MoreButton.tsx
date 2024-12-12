interface BtnProps {
  btnText: string;
  source?: string;
}
const MoreButton = ({ btnText, source }: BtnProps) => {
  return (
    <div className="text-darkText leading-4 cursor-pointer text-base font-dmSans border border-darkText  h-[47px] w-[188px] flex items-center pl-[18px] relative">
      <div className="">{btnText}</div>
      <img
        src="./assets/images/button/pluse.svg"
        className="absolute right-[10px] bottom-4"
      />
    </div>
  );
};

export default MoreButton;
