import "./App.css";
import Footer from "./components/Home/Footer/Footer";
import GetStart from "./components/Home/GetStart/GetStart";
import Hero from "./components/Home/Hero/Hero";
import MobileNav from "./components/Home/NavBar/MobileNav";
import NavBar from "./components/Home/NavBar/NavBar";
import Partner from "./components/Home/Partner/Partner";
import Problem from "./components/Home/Problem/Problem";

function App() {
  return (
    <>
      <main className="font-nunito bg-[url(/hero-bg.svg)] main-h-svh bg-no-repeat bg-center md:bg-top">
        <NavBar />
        <Hero />
        <Problem />
        <Partner />
        <GetStart />
        <Footer />
      </main>
    </>
  );
}

export default App;
