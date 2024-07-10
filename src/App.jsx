import "./App.css";
import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner />
      </main>
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
