import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import "./scss/App.scss";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
		</Router>
	);
}

export default App;
