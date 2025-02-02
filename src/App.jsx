import "./App.css";
import Footer from "./components/Home/Footer/Footer";
import Hero from "./components/Home/Hero/Hero";
import MobileNav from "./components/Home/NavBar/MobileNav";
import NavBar from "./components/Home/NavBar/NavBar";
import Problem from "./components/Home/Problem/Problem";

function App() {
  return (
    <>
      <main className="font-nunito bg-[url(/hero-bg.svg)] main-h-svh bg-no-repeat bg-center md:bg-top">
        <NavBar />
        <Hero />
        <Problem />
        <Footer />
      </main>
    </>
  );
}

export default App;
