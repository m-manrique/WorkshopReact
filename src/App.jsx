import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { ItemsProvider } from "./context/ItemsContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Shop from "./components/Shop/Shop";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import ShopContainer from "./components/ShopContainer/ShopContainer";
import ComprasPage from "./pages/ComprasPage/ComprasPage";

const App = () => {
  return (
    <ItemsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopContainer />} />
          <Route exact path="/compras" element={<ComprasPage />} />
          <Route exact path="/itemDetail/:id" element={<ItemDetail />} />
          <Route exact path="/category/:categoryId" element={<CategoryPage />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </ItemsProvider>
  );
};

export default App;
