import { useTranslation } from "react-i18next";
import "./Services.scss";
import WordLine from "../WordLine/WordLine";
import { useEffect } from "react";

const Services = () => {
	const { t } = useTranslation();

	useEffect(() => {
		const dividers = document.querySelectorAll(".service__divider");

		dividers.forEach((divider) => {
			document.addEventListener("scroll", () => {
				if (!dividers) return;
				const dividerRect = divider.getBoundingClientRect();

				if (dividerRect.top < window.innerHeight) {
					divider.classList.add("service__divider--active");
				} else {
					divider.classList.remove("service__divider--active");
				}
			});
		});
	}, []);

	return (
		<div className="services">
			<h2 className="services__title">
				<WordLine>{t("services.title")}</WordLine>
			</h2>
			<div className="services__desc">
				<WordLine>{t("services.desc")}</WordLine>
			</div>
			<div className="home__services-grid">
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title1")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc1")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title2")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc2")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title3")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc3")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title4")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc4")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title5")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc5")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
				<div className="service">
					<div className="service__title">
						<WordLine>{t("services.service_title6")}</WordLine>
					</div>
					<div className="service__desc">
						<WordLine>{t("services.service_desc6")}</WordLine>
					</div>
				</div>
				<div className="service__divider"></div>
			</div>
		</div>
	);
};

export default Services;
