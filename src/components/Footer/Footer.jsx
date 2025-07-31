import { NavLink } from "react-router-dom";
import LngBtn from "../LngBtn/LngBtn";
import { useParams } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
	const { lng } = useParams();

	const inactiveFooterLink = "footer__nav-link";
	const activeFooterLink = "footer__nav-link footer__nav-link--active";

	return (
		<footer className="footer">
			<p style={{ fontSize: "3rem" }}>heeeyooo studio</p>
			<div className="footer-top">
				<div className="footer__nav">
					<p>Sitemap</p>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/`}
						end
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/about`}
					>
						About
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/work`}
					>
						Work
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/contacts`}
					>
						Contacts
					</NavLink>
				</div>
				{/* <div className="footer__nav">
					<p>Contact us</p>
					<a className="footer__nav-link" href="tel:+420722001016">
						+420 722 001 016
					</a>
					<a className="footer__nav-link" href="mailto:hello@heeeyooo.studio">
						hello@heeeyooo.studio
					</a>
				</div> */}
			</div>
			<LngBtn />
			<div className="footer-bottom">
				<p>&copy; 2025 heeeyooo studio</p>
				<p>All rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
