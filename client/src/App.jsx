import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Success from "./pages/Success";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}>

        </Route>
        <Route path="/products/:cat" element={<ProductList />}>

        </Route>
        <Route path="/product/:id" element={<Product />}>

        </Route>
        <Route path="/cart" element={<Cart />}>

        </Route>
        <Route exact path="/login" element={user ? <Navigate to="/" /> : <Login />} />

        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/success" element={<Success />}>
        </Route>

      </Routes>
    </Router>
  );






};

export default App;