import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Contacts.scss";

const Contacts = () => {
	const { t } = useTranslation();

	const { lng } = useParams();

	async function initMap() {
		const centerPosition = { lat: 50.02718425360769, lng: 15.202752716064479 }; // Center of Czech Republic

		// Example dark theme style (Snazzy Maps)
		const darkStyle = [
			{ elementType: "geometry", stylers: [{ color: "#323232" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#7e7e7e" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
			{
				featureType: "road",
				elementType: "geometry",
				stylers: [{ color: "#000000" }],
			},
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [{ color: "#0e1626" }],
			},
			{
				featureType: "water",
				elementType: "labels.text.fill",
				stylers: [{ color: "#4e6d70" }],
			},

			// Hides POI icons
			{
				featureType: "poi",
				elementType: "labels.icon",
				stylers: [{ visibility: "off" }],
			},
			// Optional: hide POI text labels too
			{
				featureType: "poi",
				elementType: "labels.text",
				stylers: [{ visibility: "off" }],
			},
			{
				featureType: "poi.airport",
				elementType: "labels.icon",
				stylers: [{ visibility: "off" }],
			},
			// {
			// 	featureType: "poi.airport",
			// 	elementType: "labels.text",
			// 	stylers: [{ visibility: "off" }],
			// },
		];

		new google.maps.Map(document.getElementById("map"), {
			zoom: 14,
			center: centerPosition,
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: darkStyle,
		});
	}

	useEffect(() => {
		initMap();
	}, []);

	return (
		<>
			<Helmet>
				<title>{t("contacts_title")} &bull; heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<main className="contacts">
				<div style={{ marginBottom: 20 }}>
					<NavLink className="page-nav__link" to={`/${lng}/`}>
						{t("home_title")}
					</NavLink>{" "}
					&bull;{" "}
					<span style={{ color: "hsl(0, 0%, 50%)" }}>
						{t("contacts_title")}
					</span>
				</div>
				<div className="contacts__inner">
					<div className="contacts__container">
						<a
							className="contacts__email"
							href="mailto:stepandordiai@gmail.com"
						>
							<p className="contacts__details-title">Say hello</p>
							<i className="fa-solid fa-envelope"></i>
						</a>
						<div className="contacts__socials">
							<a
								href="https://www.instagram.com/heeeyooo.studio/"
								target="_blank"
								className="contacts__details"
							>
								<p className="contacts__details-title">
									Follow us on Instagram
								</p>
								<i className="fa-brands fa-instagram"></i>
							</a>
							<a href="" className="contacts__details">
								<p className="contacts__details-title">Follow us on Facebook</p>
								<i className="fa-brands fa-facebook-f"></i>
							</a>
						</div>
					</div>
					<div className="contacts__map-form-container">
						<div className="contacts__details-map">
							<p className="contacts__details-title">Kolin, Prague</p>
							<i className="fa-solid fa-map"></i>
							<div id="map"></div>
						</div>
						<div className="contacts__form-details">
							<p className="contacts__form-details-title">
								Tell us more about yourself and what you've got in mind.
							</p>
							<form
								className="contacts__form"
								action="https://formspree.io/f/xovddpld"
								method="post"
							>
								<div className="contacts__form-container">
									<label htmlFor="fullName">Full name</label>
									<input
										className="input"
										type="text"
										name="fullName"
										id="fullName"
									/>
								</div>
								<div className="contacts__form-container">
									<label htmlFor="email">E-mail</label>
									<input
										className="input"
										type="text"
										name="email"
										id="email"
									/>
								</div>
								<div className="contacts__form-container">
									<label htmlFor="message">
										Tell us a little about the project...
									</label>
									<textarea name="message" id="message"></textarea>
								</div>
								<div>
									<p style={{ marginBottom: 5 }}>How can we help?</p>
									<div className="check-container">
										<div
											style={{
												display: "flex",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<input
												type="checkbox"
												name="howCanWeHelp"
												id="strategy"
												value="UX/UI Design"
											/>
											<label htmlFor="strategy">UX/UI Design</label>
										</div>
										<div>
											<input
												type="checkbox"
												name="howCanWeHelp"
												id="design"
												value="Web Development"
											/>
											<label htmlFor="design">Web Development</label>
										</div>
										<div>
											<input
												type="checkbox"
												name="howCanWeHelp"
												id="development"
												value="Hosting"
											/>
											<label htmlFor="development">Hosting</label>
										</div>
										<div>
											<input
												type="checkbox"
												name="howCanWeHelp"
												id="hosting"
												value="Website Maintenance"
											/>
											<label htmlFor="hosting">Website Maintenance</label>
										</div>
										<div>
											<input
												type="checkbox"
												name="howCanWeHelp"
												id="seo"
												value="SEO"
											/>
											<label htmlFor="seo">SEO</label>
										</div>
									</div>
								</div>
								<button className="contacts__form-btn" type="submit">
									Let's get started!
								</button>
							</form>
							<div style={{ marginTop: 10 }}>
								<p>Don't like forms? Write us a message instead!</p>
								<a
									href="mailto:stepandordiai@gmail.com"
									style={{ color: "black" }}
								>
									stepandordiai@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contacts;
