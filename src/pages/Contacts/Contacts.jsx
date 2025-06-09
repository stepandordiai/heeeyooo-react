import { Helmet } from "react-helmet";
import "./Contacts.scss";

const Contacts = () => {
	return (
		<>
			<Helmet>
				<title>Contacts | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<div className="contacts">
				<div className="contacts__details">
					<h1>Contact us</h1>
					<p className="contacts__details-title">Say hello</p>
					{/* <a href="tel:+420722001016">+420 722 001 016</a> */}
					<a href="mailto:hello@heeeyooo.studio">hello@heeeyooo.studio</a>
				</div>
				<form className="contacts__form" action="">
					<input type="text" name="firstName" placeholder="First name" />
					<input type="text" name="email" placeholder="E-mail" />
					<input type="text" name="tel" placeholder="Phone number" />
					<button className="contacts__form-btn" type="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
};

export default Contacts;
