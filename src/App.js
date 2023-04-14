import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import { Header } from "./components/header/Header.js";
import { Catalog } from "./components/catalog/Catalog.js";
import { ComputerProvider } from "./contexts/ComputerContext.js";
import { Details } from "./components/details/Details.js";
import { Logout } from "./components/logout/logout.js";
import { RouteGuard } from "./components/owner&routeguard/RouteGuard.js";
import { AdOwner } from "./components/owner&routeguard/AdOwner.js";

import Home from "./components/home/Home.js";
import Login from "./components/login/Login.js";
import Register from "./components/register/Register.js";
import CreatePost from "./components/CreateAd/CreateAd.js";
import EditAd from "./components/catalog/edit/EditAd.js";

function App() {
  return (
    <AuthProvider>
      <ComputerProvider>
        <div id="container">
          <Header />

          <main id="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/catalog" element={<Catalog />} />

              <Route
                path="/create"
                element={
                  <RouteGuard>
                    <CreatePost />
                  </RouteGuard>
                }
              />

              <Route path="/catalog/:computerId" element={<Details />} />

              <Route element={<RouteGuard />}>
                <Route
                  path="/catalog/:computerId/edit"
                  element={
                    <AdOwner>
                      <EditAd />
                    </AdOwner>
                  }
                />
              </Route>
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
      </ComputerProvider>
    </AuthProvider>
  );
}

export default App;
