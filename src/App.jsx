import { Routes, Route } from "react-router-dom";

import Navbar from "module/Navbar/Navbar";
import HomePage from "Page/HomePage/HomePage";
import RecipesBeerPage from "Page/RecipesBeerPage/RecipesBeerPage";

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<RecipesBeerPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
};
