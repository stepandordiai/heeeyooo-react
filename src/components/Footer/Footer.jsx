import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import LngBtn from "../LngBtn/LngBtn";
import { useParams } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

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
						{t("home_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/about`}
					>
						{t("about_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/work`}
					>
						{t("work_title")}
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? activeFooterLink : inactiveFooterLink
						}
						to={`/${lng}/contacts`}
					>
						{t("contacts_title")}
					</NavLink>
				</div>
			</div>
			<LngBtn />
			<div className="footer-bottom">
				<p>&copy; 2025 heeeyooo studio</p>
				<p>{t("all_rights_reserved")}</p>
			</div>
		</footer>
	);
};

export default Footer;
