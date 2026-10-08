import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { BrowserRouter, Routes, Route } from "react-router"

import App from "./App.jsx"
import SignIn from "./Pages/SignIn.jsx"
import Market from "./Pages/Market.jsx"
import Cart from "./Pages/Cart.jsx"
import Receipt from "./Pages/Receipt.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/signin" index element={<SignIn />} />
        <Route path="/market" index element={<Market />} />
        <Route path="/cart" index element={<Cart />} />
        <Route path="/receipt" index element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
