interface BtnProps {
  btnText: string;
}
const MoreButton = ({ btnText }: BtnProps) => {
  return (
    <div className="text-darkText leading-4 text-base font-dmSans border border-darkText  h-[47px] w-[188px] flex items-center justify-center relative">
      <div className="">{btnText}</div>
      <img
        src="./assets/images/button/pluse.svg"
        className="absolute right-2 bottom-2"
      />
    </div>
  );
};

export default MoreButton;
