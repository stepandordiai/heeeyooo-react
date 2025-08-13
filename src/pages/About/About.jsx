import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./About.scss";

const About = () => {
	const { t } = useTranslation();

	const { lng } = useParams();

	return (
		<>
			<Helmet>
				<title>{t("about_title")} | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/about" />
			</Helmet>
			<main className="about">
				<div style={{ marginBottom: 20 }}>
					<NavLink className="page-nav__link" to={`/${lng}/`}>
						{t("home_title")}
					</NavLink>{" "}
					&bull;{" "}
					<span style={{ color: "hsl(0, 0%, 50%)" }}>{t("about_title")}</span>
				</div>
				<p>{t("construction")}</p>
			</main>
		</>
	);
};

export default About;
