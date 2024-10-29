import Navbar from "../components/Navbar";
import SectionHome from "../components/SectionHome";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      
        <header>
          <Navbar />
        </header>
        <section>
          <SectionHome />
        </section>
        <footer>
          <Footer />
        </footer>
    </>
  );
};

export default Home;
