import { useTranslation } from "react-i18next";
import "./Technologies.scss";

const Technologies = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 style={{ textAlign: "center" }}>{t("technologies_title")}</h2>
			<div className="technologies">
				<p>Next.js</p>
				<p>Bootstrap</p>
				<p>React.js</p>
				<p>Sass</p>
				<p>CSS</p>
				<p>HTML</p>
				<p>Node.js</p>
				<p>express.js</p>
				<p>JavaScript</p>
				<p>TypeScript</p>
				<p>Python</p>
				<p>MongoDB</p>
				<p>Figma</p>
				<p>GitHub</p>
				<p>Git</p>
			</div>
		</>
	);
};

export default Technologies;
