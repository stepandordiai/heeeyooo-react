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
