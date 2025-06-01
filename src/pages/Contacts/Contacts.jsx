import { Helmet } from "react-helmet";
import "./Contacts.scss";

const Contacts = () => {
	return (
		<>
			<Helmet>
				<title>Contacts | heeeyooo studio</title>
				<link rel="canonical" href="https://heeeyooo.studio/contacts" />
			</Helmet>
			<h1>Contacts</h1>
			<a href="tel:+420722001016">+420 722 001 016</a>
			<br />
			<a href="mailto:hello@heeeyooo.studio">hello@heeeyooo.studio</a>
			<p className="construction">This page is under construction</p>
		</>
	);
};

export default Contacts;
