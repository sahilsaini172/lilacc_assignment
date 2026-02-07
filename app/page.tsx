import Footer from "./landing/Footer";
import Hero from "./landing/Hero";
import Section1 from "./landing/Section1";
import Section2 from "./landing/Section2";
import Section3 from "./landing/Section3";
import Section4 from "./landing/Section4";
import Section5 from "./landing/Section5";
import Section6 from "./landing/Section6";
import Section7 from "./landing/Section7";

const Home = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Footer/>
    </div>
  );
};

export default Home;
