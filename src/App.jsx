import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import RecipesCacao from "./pages/RecipesCacao";
import RecipeInfo from "./pages/RecipeInfo";
import HistoryCacao from "./pages/HistoryCacao";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/recipes-cacao" element={<RecipesCacao />}></Route>
          <Route path="/recipe-info/:id" element={<RecipeInfo />}></Route>
          <Route path="/history-cacao" element={<HistoryCacao />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
