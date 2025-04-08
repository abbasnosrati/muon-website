import { useState } from "react";
import BlackButton from "../common/Buttons/BlackButton";
import { DiscoverMoreBtn } from "../Products/Products";

const structureItems = [
  {
    id: 0,
    title: "Muon Network",
    titleImgSrc: "./assets/images/structure/muon-network.svg",
    description:
      "A decentralized network of nodes that deploy and run MuonApps. Each app runs on a dynamic subnet where nodes collaborate to operate and provide TSS signatures as proof, verifiable on-chain and off-chain.",
    descriptionImgSrc: " ./assets/images/structure/muon-ill-network.svg",
    readeMoreSrc:
      "https://docs.muon.net/muon-protocol/muon-protocol/modular-security-stack/tss-network",
  },
  {
    id: 1,
    title: "MuonApps",
    titleImgSrc: "./assets/images/structure/muon-app.svg",
    description: (
      <>
        MuonApps are applications that projects can develop and deploy on the
        network to run their micro-validators.
        <br />
        Unlike smart contracts, which operate on the blockchain and are isolated
        from real-world data, MuonApps have access to real-world data and
        function similarly to services running on a computer or cloud platform.
      </>
    ),
    descriptionImgSrc: "./assets/images/structure/muon-apps.svg",
    readeMoreSrc: "https://docs.muon.net/muon-protocol/muonapps-build-on-muon",
  },
  {
    id: 2,
    title: "Muon Client SDK",
    titleImgSrc: "./assets/images/structure/muon-sdk.svg",

    description:
      "Muon provides an SDK containing smart contract libraries that allow dApps to verify proofs on-chain. This verification is chain-agnostic, meaning it can be performed on any blockchain.",
    descriptionImgSrc: " ./assets/images/structure/muon-sdk-content.svg",
    readeMoreSrc: "",
  },
  {
    id: 3,
    title: "Muon Security",
    titleImgSrc: "./assets/images/structure/muon-security.svg",

    description: null,
    descriptionImgSrc: "./assets/images/structure/muon-security-stack.svg",
    readeMoreSrc:
      "https://docs.muon.net/muon-protocol/muon-protocol/modular-security-stack",
  },
];

const MuonStructure = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  return (
    <div
      id="2"
      className={`select-none border-b border-b-darkText text-whiteTextSecond ${
        selectedItem !== 3
          ? "padding-between-section"
          : "pb-[100px] below-1024:pb-[50px]"
      }`}
    >
      <div>
        <BlackButton btnNum={"02"} btnText={"Muon Structure"} />
        <div className="section-title-text"></div>
      </div>

      <div className="flex below-1024:flex-col justify-between">
        <div className="right-side flex sm:flex-col flex-col-reverse gap-8  above-1440:gap-10 w-full below-1024:w-full max-w-[400px] above-1440:max-w-[470px]">
          <div>
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  selectedItem === index
                    ? "flex justify-center sm:justify-start"
                    : "hidden"
                }`}
              >
                <img
                  src={item.titleImgSrc}
                  className="w-[86%] sm:w-[60%] above-1440:w-[70%] hidden sm:flex"
                />

                <div className="flex flex-col items-center sm:hidden">
                  <img
                    src={
                      selectedItem == 3
                        ? "./assets/images/structure/item-3.svg"
                        : item.descriptionImgSrc
                    }
                    className="w-[86%] flex sm:hidden sm:w-[60%] above-1440:w-[70%]"
                  />

                  {selectedItem === 3 ? (
                    <div
                      className={`mt-20 font-azeretMono text-whiteTextSecond below-1024:flex flex-col gap-3 hidden`}
                    >
                      <div className="border-b border-whiteTextSecond pb-5">
                        <div className="text-[15px] font-semibold pb-5">
                          1.Threshold Signature Scheme
                        </div>
                        <div className="text-[11px] font-normal">
                          Randomly selected nodes form a subnet to produce a
                          single signature, reducing costs while maintaining
                          security. Muon’s TSS network.
                        </div>
                      </div>
                      <div className="border-b border-whiteTextSecond pb-5">
                        <div className="text-[15px] font-semibold pb-5">
                          2.Muon AVS on EigenLayer
                        </div>
                        <div className="text-[11px] font-normal">
                          Muon utilizes EigenLayer for additional security.
                          Execute MuonApps, process requests, and provide
                          proofs. Muon AVS on EigenLayer.
                        </div>
                      </div>
                      <div className="border-b border-whiteTextSecond pb-5">
                        <div className="text-[15px] font-semibold pb-5">
                          3.Shield Nodes
                        </div>
                        <div className="text-[11px] font-normal">
                          Additional security layers run by dApps or trusted
                          third parties.
                        </div>
                      </div>

                      <DiscoverMoreBtn
                        src={item.readeMoreSrc}
                        btnText="Read More"
                        size="small"
                      />
                      {/* <p
                        onClick={() => window.open(item.readeMoreSrc, "_black")}
                        className="mt-[45px] text-[9px] sm:text-sm above-1440:text-[18px] font-medium  border-b cursor-pointer border-whiteText w-fit pb-1 relative after:absolute after:-bottom-1 after:h-2 after:w-2 after:border-r after:right-[0px] after:border-b after:-rotate-[45deg]"
                      >
                        Read More
                      </p> */}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="structure-titles below-1024:text-[14px] ml-5 font-azeretMono text-sm above-1440:text-[23px] 1024-1279:text-[12px] font-medium tracking-[2px] leading-[10px] flex flex-col gap-[20px] sm:gap-[30px] mt-[3px]">
            {structureItems.map((item, index) => (
              <div
                key={index}
                className={` relative ${
                  index === selectedItem ? "" : "text-darkText"
                } cursor-pointer text-nowrap `}
                onClick={() => setSelectedItem(index)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseOut={() => setHoveredItem(null)}
              >
                {(index === selectedItem || index === hoveredItem) && (
                  <div className="w-[6px] h-[6px] sm:w-[10px] absolute sm:h-[10px] rounded-full top-[2px] sm:top-0 -left-3 sm:-left-5 bg-orangePrimary"></div>
                )}
                {item.title}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center above-1440:max-w-[620px] below-1024:w-full above-1280:max-w-[500px] 1024-1279:max-w-[250px] below-1024:my-5 ">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedItem === index
                  ? "flex text-[11px] 1024-1279:text-[10px] above-1280:text-base !font-light below-1024:!leading-[22px] above-1440:leading-[32px] lg:leading-[22px] custom-1440:leading-[28px]  above-1440:text-[20px] font-azeretMono sm:mr-5"
                  : "hidden"
              }  ${!item.description && "hidden"}`}
            >
              <div>
                <p className="">{item.description}</p>

                {item.readeMoreSrc.length < 2 ? (
                  ""
                ) : (
                  // <p
                  //   onClick={() => window.open(item.readeMoreSrc, "_blank")}
                  //   className="mt-[45px] text-[9px] sm:text-sm above-1440:text-[18px] font-medium border-b cursor-pointer border-whiteText w-fit pb-[4px] relative after:absolute after:-bottom-1 after:h-2 after:w-2 after:border-r after:right-[0px] after:border-b after:-rotate-[45deg]"
                  // >
                  //   Read More
                  // </p>

                  <DiscoverMoreBtn
                    src={item.readeMoreSrc}
                    btnText="Read More"
                    size="small"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex">
          {structureItems.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedItem === index ? "flex flex-col w-full" : "hidden"
              } items-center `}
            >
              <div className="relative">
                <img
                  src={item.descriptionImgSrc}
                  alt=""
                  className={`max-w-[100%] above-1440:w-full below-1024:max-w-[60%] ${
                    selectedItem == 3 && "below-1024:hidden"
                  }`}
                />
                {selectedItem == 3 ? (
                  // <p
                  //   onClick={() => window.open(item.readeMoreSrc, "_black")}
                  //   className="mt-[45px] text-[9px] sm:text-sm above-1440:text-[18px] font-medium flex below-1024:hidden absolute border-b cursor-pointer border-whiteText w-fit pb-[4px] left-0 bottom-[7%] after:absolute after:-bottom-1 after:h-2 after:w-2 after:border-r after:right-[0px] after:border-b after:-rotate-[45deg] 1024-1279:text-[10px]  below-1024:!leading-5 !leading-[28px] font-azeretMono "
                  // >
                  //   Read More
                  // </p>
                  <div className="-mt-32">
                    <DiscoverMoreBtn
                      src={item.readeMoreSrc}
                      btnText="Read More"
                      size="small"
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <img
                src={"./assets/images/structure/item-3.svg"}
                alt=""
                className={`${
                  selectedItem != 3
                    ? "hidden"
                    : "max-w-[100%] below-1024:flex hidden"
                }  `}
              />

              {selectedItem === 3 ? (
                <div
                  className={`mt-20 font-azeretMono text-whiteTextSecond below-1024:flex flex-col gap-3 hidden`}
                >
                  <div className="border-b border-whiteTextSecond pb-5">
                    <div className="text-base font-semibold pb-5">
                      1.Threshold Signature Scheme
                    </div>
                    <div className="text-sm font-normal">
                      Randomly selected nodes form a subnet to produce a single
                      signature, reducing costs while maintaining security.
                      Muon’s TSS network.
                    </div>
                  </div>
                  <div className="border-b border-whiteTextSecond pb-5">
                    <div className="text-base font-semibold pb-5">
                      2.Muon AVS on EigenLayer
                    </div>
                    <div className="text-sm font-normal">
                      Muon utilizes EigenLayer for additional security. Execute
                      MuonApps, process requests, and provide proofs. Muon AVS
                      on EigenLayer.
                    </div>
                  </div>
                  <div className="border-b border-whiteTextSecond pb-5">
                    <div className="text-base font-semibold pb-5">
                      3.Shield Nodes
                    </div>
                    <div className="text-sm font-normal">
                      Additional security layers run by dApps or trusted third
                      parties.
                    </div>
                  </div>

                  {/* <p
                    onClick={() => window.open(item.readeMoreSrc, "_black")}
                    className="mt-[45px] text-[9px] sm:text-sm above-1440:text-[18px] font-medium  border-b cursor-pointer border-whiteText w-fit pb-1 relative after:absolute after:-bottom-1 after:h-2 after:w-2 after:border-r after:right-[0px] after:border-b after:-rotate-[45deg]"
                  >
                    Read More
                  </p> */}

                  <DiscoverMoreBtn
                    src={item.readeMoreSrc}
                    btnText="Read More"
                    size="small"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuonStructure;
