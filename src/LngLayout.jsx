import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Work from "./pages/Work/Work";
import i18n from "i18next";
import "./i18next";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const LngLayout = () => {
	const { lng } = useParams();

	useEffect(() => {
		if (lng && i18n.language !== lng) {
			i18n.changeLanguage(lng);
		}
	}, [lng]);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contacts" element={<Contacts />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default LngLayout;
