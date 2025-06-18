import { Helmet } from "react-helmet";
import "./Contacts.scss";
import instagramIcon from "/icons/instagram-white.png";
import facebookIcon from "/icons/facebook-white.png";
import mailIcon from "/icons/mail.png";
import mapIcon from "/icons/map.png";

const Contacts = () => {
	return (
		<>
			<Helmet>
				<title>Contacts | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<div className="contacts">
				<a href="mailto:hello@heeeyooo.studio" className="contacts__email">
					<p className="contacts__details-title">Say hello</p>
					<img
						style={{ alignSelf: "flex-end" }}
						width={30}
						src={mailIcon}
						alt=""
					/>
				</a>
				<div className="contacts__socials-map">
					<div className="contacts__socials">
						<a
							href="https://www.instagram.com/heeeyooo.studio/"
							className="contacts__details"
						>
							<p className="contacts__details-title">Follow us on Instagram</p>
							<img
								style={{ alignSelf: "flex-end" }}
								width={30}
								src={instagramIcon}
								alt=""
							/>
						</a>
						<div className="contacts__details">
							<p className="contacts__details-title">Follow us on Facebook</p>
							<img
								style={{ alignSelf: "flex-end" }}
								width={30}
								src={facebookIcon}
								alt=""
							/>
						</div>
					</div>

					<div className="contacts__details">
						<p className="contacts__details-title">Kolin, Prague</p>
						<img
							style={{ alignSelf: "flex-end" }}
							width={30}
							src={mapIcon}
							alt=""
						/>
						<iframe
							className="contacts__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42234.268517728044!2d15.165357391517029!3d50.0321830622216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c1518bc00b7cf%3A0x400af0f66153a80!2sKolin%2C%20280%2002%20Kol%C3%ADn%202!5e1!3m2!1sen!2scz!4v1750167169850!5m2!1sen!2scz"
							// width="600"
							// height="450"
							// style="border:0;"
							// allowfullscreen=""
							loading="lazy"
							// referrerpolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>

				{/* <form className="contacts__form" action="">
					<input type="text" name="firstName" placeholder="First name" />
					<input type="text" name="email" placeholder="E-mail" />
					<input type="text" name="tel" placeholder="Phone number" />
					<button className="contacts__form-btn" type="submit">
						Submit
					</button>
				</form> */}
			</div>
		</>
	);
};

export default Contacts;
