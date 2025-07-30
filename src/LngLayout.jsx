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
import workData from "./assets/data/work-data.json";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const LngLayout = () => {
	const { lng } = useParams();

	useEffect(() => {
		if (lng && i18n.language !== lng) {
			i18n.changeLanguage(lng);
		}
	}, [lng]);
	return (
		<>
			<Header workData={workData} />
			<Routes>
				<Route path="/" element={<Home workData={workData} />} />
				<Route path="/about" element={<About />} />
				<Route path="/work" element={<Work workData={workData} />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route
					path="/project-page/:id"
					element={<ProjectPage workData={workData} />}
				/>
			</Routes>
			<Footer />
			<ScrollToTop />
		</>
	);
};

export default LngLayout;
