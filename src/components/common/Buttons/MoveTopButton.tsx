const MoveTopButton = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex w-full pt-10 above-1024::pt-20 pb-10 justify-center ">
      <div className="cursor-pointer" onClick={() => scrollTop()}>
        <img src="./assets/images/button/mvTopLarge.svg" alt="" />
      </div>
    </div>
  );
};

export default MoveTopButton;
