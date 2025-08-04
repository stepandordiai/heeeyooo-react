import { useEffect } from "react";
import "./BurgerBtn.scss";

const BurgerBtn = () => {
	function toggleBurger1() {
		const burger = document.querySelector(".burger-1");

		if (burger.classList.contains("burger-1--active")) {
			document.querySelector(".header").classList.remove("header--active");
			document
				.querySelector(".burger-menu")
				.classList.remove("burger-menu--active");
			document.querySelector(".burger-1").classList.remove("burger-1--active");
		} else {
			document.querySelector(".header").classList.add("header--active");
			document
				.querySelector(".burger-menu")
				.classList.add("burger-menu--active");
			document.querySelector(".burger-1").classList.add("burger-1--active");
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", () => {
			document.querySelector(".burger-1").classList.remove("burger-1--active");
			document.querySelector(".header").classList.remove("header--active");
			document
				.querySelector(".burger-menu")
				.classList.remove("burger-menu--active");
		});
	}, []);

	return (
		<div onClick={toggleBurger1} className="burger-btn__container">
			<div className="burger-1"></div>
		</div>
	);
};

export default BurgerBtn;
