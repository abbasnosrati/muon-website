import "./App.css";
import Features from "./components/Features/Features";
import Navbar from "./components/Navbar/Navbar";
import MuonSection from "./components/MuonSection/MuonSection";
import Products from "./components/Products/Products";
import News from "./components/News/News";

function App() {
  return (
    <div className="background-container overflow-hidden">
      <div className="content  pt-[60px] flex items-center justify-center">
        <div className="max-w-[1440px] pr-[136px] pl-[136px]">
          <Navbar />
          <Features />
          <MuonSection />
          <Products />
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;