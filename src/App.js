import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import FavRecipes from "./Components/FavRecipes";
function App() {
  return (
    <>
      <NavBar/>
      <h1> welcome to our recipes website</h1>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="favRecipes" element={<FavRecipes />} />
      </Routes>
    </>
  );
}

export default App;
