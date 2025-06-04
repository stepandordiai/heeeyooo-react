import { Helmet } from "react-helmet";
import "./Contacts.scss";

const Contacts = () => {
	return (
		<>
			<Helmet>
				<title>Contacts | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<h1>Contact us</h1>
			<div className="contacts__details">
				<p className="contacts__details-title">Say hello</p>
				{/* <a href="tel:+420722001016">+420 722 001 016</a> */}
				<a href="mailto:hello@heeeyooo.studio">hello@heeeyooo.studio</a>
			</div>
		</>
	);
};

export default Contacts;
