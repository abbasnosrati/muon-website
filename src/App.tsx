import "./App.css";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import MuonSection from "./components/MuonSection/MuonSection";
import Products from "./components/Products/Products";
import News from "./components/News/News";
import MoveTopButton from "./components/common/Buttons/MoveTopButton";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="background-container overflow-hidden">
      <div className="content  pt-[60px] flex items-center justify-center">
        <div className="max-w-[1440px] w-full px-10 sm:px-[70px] above-1024:px-[136px]">
          <Navbar />
          <Features />
          <MuonSection />
          <Products />
          <News />
          <div className="">
            <MoveTopButton />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
