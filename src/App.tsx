import "./App.css";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import MuonSection from "./components/MuonSection/MuonSection";
import Products from "./components/Products/Products";
import News from "./components/News/News";
import MoveTopButton from "./components/common/Buttons/MoveTopButton";
import Footer from "./components/Footer/Footer";
import MuonStructure from "./components/MuonStructure/MuonStructure";

function App() {
  return (
    <div className="background-container overflow-hidden">
      <div className="content relative pt-[60px] flex items-center justify-center">
        <div className="max-w-[1920px] w-full px-10 sm:px-[70px] custom-1280:px-[100px] above-1024:px-[136px] above-1440:px-[182px]">
          <Navbar />
          <Features />
          <MuonStructure />
          <MuonSection />
          <Products />
          <News />
          <div className="mt-[120px] above-1440:mt-[170px]">
            <MoveTopButton />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
