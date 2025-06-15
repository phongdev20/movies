import { Route, Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import MovieDetail from "./pages/detailMovie/MovieDetail";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
