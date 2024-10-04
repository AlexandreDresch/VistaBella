import Routes from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";

function App() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Banner />
      <AboutUs />
      <OurTeam />
      <Routes />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
