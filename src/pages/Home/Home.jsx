import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Technologies from "../../components/Technologies/Technologies";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Services from "../../components/Services/Services";
import WordLine from "../../components/WordLine/WordLine";
import "./Home.scss";

const Home = ({ workData }) => {
	const { t } = useTranslation();

	const { lng } = useParams();

	return (
		<>
			<Helmet>
				<title>Creative web studio | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/" />
			</Helmet>
			<main className="home">
				<div className="home__top">
					<p style={{ textAlign: "center", color: "var(--accent-clr)" }}>
						<WordLine>{t("website_under_construction")}</WordLine>
					</p>
					<h1 className="home__title">
						<WordLine>{t("home.title")}</WordLine>
					</h1>
					<div className="home__desc" style={{ color: "hsl(0,0%,50%)" }}>
						<WordLine>{t("home.sec_title")}</WordLine>
					</div>
				</div>
				<h2 style={{ marginTop: 100 }}>
					<WordLine>{t("featured_work_title")}</WordLine>
				</h2>
				<p style={{ marginTop: 20, marginBottom: 20 }}>
					<WordLine>{t("featured_work_desc")}</WordLine>
				</p>
				<div className="home__works">
					{workData
						.filter((project) => project.isFeatured)
						.map((project) => {
							return (
								<NavLink
									data-cursor-text="See more"
									key={project.id}
									className="home__work rect-animate"
									to={`/${lng}/project-page/${project.id}`}
								>
									<img className="home__work-img" src={project.img[0]} alt="" />
									<div className="home__work-details">
										<p className="home__work-name">{project.name}</p>
										<p className="home__work-date">{project.date}</p>
									</div>
								</NavLink>
							);
						})}
				</div>
				<Services />
				<Technologies />
				<h2>Our process</h2>
				<p>Efficient, Transparent, and Custom-Tailored</p>
				<p>
					We follow a streamlined process to ensure your app is developed
					efficiently and meets the highest standards.
				</p>
				<div>
					<div>
						<p>1</p>
						<p>Consultation</p>
						<p>
							We begin by understanding your business needs and goals for your
							app.
						</p>
					</div>
					<div>
						<p>2</p>
						<p>Design</p>
						<p>
							Our team designs a user-friendly interface that offers an engaging
							experience on all devices.
						</p>
					</div>
					<div>
						<p>3</p>
						<p>Development</p>
						<p>
							We build your app using cutting-edge technologies for optimal
							performance across all browsers and devices.
						</p>
					</div>
					<div>
						<p>4</p>
						<p>Launch</p>
						<p>
							We successfully launch your app and provide ongoing support to
							ensure long-term success.
						</p>
					</div>
				</div>
				;
			</main>
		</>
	);
};

export default Home;
