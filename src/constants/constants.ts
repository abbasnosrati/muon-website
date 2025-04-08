export const menuItems = [
  {
    id: "0",
    title: "What is Muon",
    subItems: [],
    src: "https://docs.muon.net/muon-protocol/what-is-muon/elevator-pitch",
  },
  {
    id: "1",
    title: "Resources",

    subItems: [
      { title: "Docs", src: "https://docs.muon.net/muon-protocol" },
      {
        title: "Litepaper",
        src: "https://files.muon.net/Muon-Litepaper-v01.pdf",
      },
    ],
    src: "",
  },
  { id: "2", title: "Ecosystem", subItems: [], src: "4" },
  // { id: "3", title: "About us", subItems: [], src: "" },
  {
    id: "3",
    title: "Dashboard",
    subItems: [],
    src: "",
    // src: "https://app.muon.net/dashboard/",
  },
  {
    id: "4",
    title: "Socials",
    subItems: [
      { title: "X", src: "https://x.com/muon_net" },
      { title: "Discord", src: "https://discord.gg/muonnetwork" },
      { title: "Medium", src: "https://medium.com/muon" },
      { title: "Github", src: "https://Github.com/muon-protocol" },
      { title: "Telegram", src: "https://t.me/muon_net" },
    ],
    src: "",
  },
];

export const letters = "abcdefghijklmnopqrstuvwxyz";

export const scrollToSection = (sectionId: string) => {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: "smooth" });
  }
};
