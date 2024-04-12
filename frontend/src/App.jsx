import ApartmentViews from "./ApartmentViews";
import Hero from "./Hero";
import Features from "./Features";
import Broucher from "./Broucher";
import Navbar from "./shared/navbar";

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <ApartmentViews />
      <Broucher />
    </section>
  );
};

export default App;
