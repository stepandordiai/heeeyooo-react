import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Work from "./pages/Work/Work";
import "./scss/App.scss";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</Router>
	);
}

export default App;
