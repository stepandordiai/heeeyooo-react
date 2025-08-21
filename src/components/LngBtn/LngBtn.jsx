import "./LngBtn.scss";
import i18n from "i18next";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const LngBtn = () => {
	const { lng } = useParams(); // current language from URL
	const location = useLocation(); // full path
	const navigate = useNavigate();

	const supportedLngs = ["uk", "en"];

	useEffect(() => {
		if (lng && supportedLngs.includes(lng)) {
			i18n.changeLanguage(lng);
			localStorage.setItem("i18nextLng", lng);
		}
	}, [lng]);

	const handleLngBtn = (lng) => {
		if (!supportedLngs.includes(lng)) return;

		const newPath = location.pathname.replace(/^\/(uk|en)/, `/${lng}`);
		i18n.changeLanguage(lng);
		localStorage.setItem("i18nextLng", lng);
		navigate(newPath + location.search, { replace: true });
	};

	return (
		<>
			<div>
				{lng === "en" ? (
					<button
						className={lng === "uk" ? "active-btn" : "inactive-btn"}
						onClick={() => handleLngBtn("uk")}
					>
						UA
					</button>
				) : (
					<button
						className={lng === "en" ? "active-btn" : "inactive-btn"}
						onClick={() => handleLngBtn("en")}
					>
						EN
					</button>
				)}
				{/* <span> &bull; </span> */}
			</div>
		</>
	);
};

export default LngBtn;
