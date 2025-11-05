import Home from "./components/home";
import Programs from "./components/programs";
import Gallery from "./components/gallery";
import { Header, Footer } from "./components/index";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import { useLanguage } from "./hooks/useLanguage";


export default function App() {
  // const { t } = useLanguage();
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/programs" element={<Programs/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
      </Routes>
      <Footer />
    </Router>


    </>
  );
};
