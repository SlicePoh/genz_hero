import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/men" element={<Men/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/kids" element={<Kids/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
