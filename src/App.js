import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header.js";
import Home from "./components/home/Home.js";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register.js";

import { Catalog } from "./components/catalog/Catalog.js";
import CreatePost from "./components/CreateAd/CreateAd.js";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
