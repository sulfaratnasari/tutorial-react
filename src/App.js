import './App.css';
import Home from './pages/home/home';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from './menu/menu';

export default function App() {
  return (
	  <div>
    <BrowserRouter>
      <Routes>
	  <Route path="/" element={<SideMenu />}>
        <Route path="/home" element={<Home />}>
			</Route>
        </Route>
      </Routes>
    </BrowserRouter>
	</div>
	
  );
}

ReactDOM.render(<App />, document.getElementById("root"));