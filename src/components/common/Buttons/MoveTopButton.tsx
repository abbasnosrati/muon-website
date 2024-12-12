const MoveTopButton = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex w-full pt-20 pb-10 justify-center ">
      <div
        className="border border-darkText h-14 w-14 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => scrollTop()}
      >
        <svg
          width="8"
          height="25"
          viewBox="0 0 8 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.9"
            d="M4.35355 0.646446C4.15829 0.451185 3.84171 0.451185 3.64645 0.646446L0.464465 3.82843C0.269203 4.02369 0.269203 4.34027 0.464465 4.53553C0.659727 4.7308 0.97631 4.7308 1.17157 4.53553L4 1.70711L6.82843 4.53553C7.02369 4.7308 7.34027 4.7308 7.53553 4.53553C7.7308 4.34027 7.7308 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 25L4.5 1L3.5 1L3.5 25L4.5 25Z"
            fill="#242124"
          />
        </svg>
      </div>
    </div>
  );
};

export default MoveTopButton;
