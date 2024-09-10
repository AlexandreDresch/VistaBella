import Routes from "./routes/routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen w-full">
      <Header />

      <Routes />
    </div>
  );
}

export default App;
