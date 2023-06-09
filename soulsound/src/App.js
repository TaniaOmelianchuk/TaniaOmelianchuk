import "./App.css";
import { Header } from "./components/layout/Header/Header";
import { Footer } from "./components/layout/Footer/Footer";
import Index from "./components/layout/IndexMain";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./context";
import IndexSearch from "./components/layout/IndexSearch";
import { Map } from "./components/layout/Map/Map";
import { AboutUs } from "./components/layout/AboutUs/AboutUs";

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/track/:id" element={<Lyrics />} />
              <Route exact path="search" element={<IndexSearch />}>
                <Route exact path="track/:id" element={<Lyrics />} />
              </Route>
              <Route exact path="about-us" element={<AboutUs />} />
            </Routes>
          </div>
          <Map />
          <Footer />
        </>
      </Router>
    </Provider>
  );
}

export default App;
