import { Helmet } from "react-helmet";
import "./Contacts.scss";
import { useEffect, useState } from "react";

const Contacts = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		email: "",
		message: "",
		howCanWeHelp: "",
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};
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
			zoom: 12,
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
				<title>Contacts | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<h1>Contacts</h1>
			<div className="contacts">
				<a href="mailto:hello@heeeyooo.studio" className="contacts__email">
					<p className="contacts__details-title">Say hello</p>
					<i className="fa-solid fa-envelope"></i>
				</a>
				<div className="contacts__socials-map">
					<div className="contacts__socials">
						<a
							href="https://www.instagram.com/heeeyooo.studio/"
							target="_blank"
							className="contacts__details"
						>
							<p className="contacts__details-title">Follow us on Instagram</p>
							<i className="fa-brands fa-instagram"></i>
						</a>
						<div className="contacts__details">
							<p className="contacts__details-title">Follow us on Facebook</p>
							<i className="fa-brands fa-facebook-f"></i>
						</div>
					</div>
					<div className="contacts__details-map">
						<p className="contacts__details-title">Kolin, Prague</p>
						<i className="fa-solid fa-map"></i>
						<div id="map"></div>
					</div>
					<div className="contacts__form-details">
						{/* <p>Got ideas? We've got the skills. Let's team up.</p> */}
						<p className="contacts__form-details-title">
							Tell us more about yourself and what you've got in mind.
						</p>
						<form
							className="contacts__form"
							action="https://formspree.io/f/xovddpld"
							method="POST"
							// encType="plain/text"
						>
							<div className="contacts__form-container">
								<label htmlFor="">Your name</label>
								<input
									className="input"
									onChange={handleFormChange}
									type="text"
									name="firstName"
									// placeholder="Your name"
									value={formData.firstName}
								/>
							</div>
							<div className="contacts__form-container">
								<label htmlFor="">E-mail</label>
								<input
									className="input"
									onChange={handleFormChange}
									type="text"
									name="email"
									// placeholder="you@company.com"
									value={formData.email}
								/>
							</div>

							<div className="contacts__form-container">
								<label htmlFor="">Tell us a little about the project...</label>
								<textarea name="" id=""></textarea>
							</div>
							<p>How can we help?</p>
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
										value="Strategy"
									/>
									<label htmlFor="strategy">Strategy</label>
								</div>
								<div>
									<input
										onChange={handleFormChange}
										type="checkbox"
										name="howCanWeHelp"
										id="design"
										value="Design"
									/>
									<label htmlFor="design">Design</label>
								</div>
								<div>
									<input
										onChange={handleFormChange}
										type="checkbox"
										name="howCanWeHelp"
										id="development"
										value="Development"
									/>
									<label htmlFor="development">Development</label>
								</div>
								<div>
									<input
										onChange={handleFormChange}
										type="checkbox"
										name="howCanWeHelp"
										id="hosting"
										value="Hosting"
									/>
									<label htmlFor="hosting">Hosting</label>
								</div>
								<div>
									<input
										onChange={handleFormChange}
										type="checkbox"
										name="howCanWeHelp"
										id="website-maintenance"
										value="Website Maintenance"
									/>
									<label htmlFor="website-maintenance">
										Website Maintenance
									</label>
								</div>
								<div>
									<input
										onChange={handleFormChange}
										type="checkbox"
										name="howCanWeHelp"
										id="seo"
										value="SEO"
									/>
									<label htmlFor="seo">SEO</label>
								</div>
							</div>
							<button className="contacts__form-btn" type="submit">
								Let's get started!
							</button>
						</form>
						<div style={{ marginTop: 10 }}>
							<p>Don't like forms? Write us a message instead!</p>
							<a href="mailto:hello@heeeyooo.studio" style={{ color: "black" }}>
								hello@heeeyooo.studio
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
