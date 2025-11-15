import Home from "./components/home";
import Gallery from "./components/gallery";
import { Header, Footer } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiniGroups from "./components/programs/mini-groups/MiniGroups";
import PersonalLessons from "./components/programs/personal-lessons/PersonalLessons";
import CampInAmed from "./components/programs/camp-in-amed/CampInAmed";
import ChildrensGroup from "./components/programs/childrens-group/ChildrensGroup";
import InterislandSwim from "./components/programs/interisland-swim/InterislandSwim";


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs/mini-groups/MiniGroups" element={<MiniGroups />} />
          <Route
            path="/programs/personal-lessons/PersonalLessons"
            element={<PersonalLessons />}
          />
          <Route path="/programs/camp-in-amed/CampInAmed" element={<CampInAmed />} />
          <Route path="/programs/childrens-group/ChildrensGroup" element={<ChildrensGroup />} />
          <Route
            path="/programs/interisland-swim/InterislandSwim"
            element={<InterislandSwim />}
          />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
