import { Header } from "../components/Home/Header"
import { Hero } from "../components/Home/Hero";
import { Portfolio } from "../components/Home/Portfolio";
import { About } from "../components/Home/About";
import { Contact } from "../components/Home/Contact";
import { Footer } from "../components/Home/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default Home;
