import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import './index.css'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);