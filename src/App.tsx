import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPokemonPage from "./pages/DetailPokemonPage";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes location={""}>
        <Route path="" element={<Layout/>}>

        <Route path="" element={<HomePage />} />
        <Route path="detail/:id" element={<DetailPokemonPage />} />
        <Route path="favorite" element={<DetailPokemonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
