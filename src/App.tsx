import Routes from "./routes/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="h-screen w-full">
      <Header />
      <Routes />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
