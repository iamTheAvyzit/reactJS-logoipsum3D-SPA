import "./App.css";
import { Blog } from "./components/Blog/Blog";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import { PricingSection } from "./components/Pricing/PricingSection";

function App() {
  return (
    <div className='App'>
      <Header/>
      <HeroSection/>
      <FeatureSection/>
      <PricingSection/>
      <Blog/>
    </div>
  );
}

export default App;