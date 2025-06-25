import { Helmet } from "react-helmet";
import "./Contacts.scss";
import { useEffect } from "react";

const Contacts = () => {
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
				</div>
			</div>
		</>
	);
};

export default Contacts;
