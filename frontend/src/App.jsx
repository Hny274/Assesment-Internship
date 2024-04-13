import ApartmentViews from "./ApartmentViews";
import Hero from "./Hero";
import Features from "./Features";
import Broucher from "./Broucher";
import Navbar from "./shared/navbar";
import Footer from "./shared/Footer";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <ApartmentViews />
      <Broucher />
      <Footer />
    </section>
  );
};

export default App;
