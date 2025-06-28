import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="footer-top">
					<div className="footer__nav">
						<p>Sitemap</p>
						<NavLink className={"footer__nav-link"} to="/">
							Home
						</NavLink>
						<NavLink className={"footer__nav-link"} to="/about">
							About
						</NavLink>
						<NavLink className={"footer__nav-link"} to="/portfolio">
							Portfolio
						</NavLink>
						<NavLink className={"footer__nav-link"} to="/contacts">
							Contacts
						</NavLink>
					</div>
					<div className="footer__nav">
						<p>Contact us</p>
						<a className={"footer__nav-link"} href="tel:+420722001016">
							+420 722 001 016
						</a>
						<a
							className={"footer__nav-link"}
							href="mailto:hello@heeeyooo.studio"
						>
							hello@heeeyooo.studio
						</a>
					</div>
				</div>
				<div className="footer-bottom">
					<p>&copy; 2025 heeeyooo studio</p>
					<p>All rights reserved</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
