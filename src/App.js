import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import ResponsiveNav from "./sections/responsive.nav/ResponsiveNav";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <ResponsiveNav />
    </main>
  );
}

export default App;
