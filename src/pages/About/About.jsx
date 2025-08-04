import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import "./About.scss";

const About = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("about_title")} | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/about" />
			</Helmet>
			<main className="about">
				<h1>{t("about_title")}</h1>
				<p>{t("construction")}</p>
			</main>
		</>
	);
};

export default About;
