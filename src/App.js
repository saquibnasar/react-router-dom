import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Products";
import Error from "./pages/Error";
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import SingleProduct from "./pages/SingleProduct";
import SharedLayout from "./pages/SharedLayout";
import { useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedProductLayout from "./pages/SharedProductLayout";

function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="product" element={<SharedProductLayout />}>
            <Route index element={<Product />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <DashBoard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
