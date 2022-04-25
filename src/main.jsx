import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import './index.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Portfolio" element={<Portfolio />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);