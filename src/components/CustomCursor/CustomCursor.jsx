import { useEffect, useRef, useState } from "react";

import "./CustomCursor.scss";

const CustomCursor = () => {
	const customCursor = useRef(null);

	const [active, setActive] = useState(false);
	const [text, setText] = useState("");

	// const isTouchDevice = () => {
	// 	try {
	// 		document.createEvent("TouchEvent");
	// 		return true;
	// 	} catch (error) {
	// 		return false;
	// 	}
	// };

	const isTouchDevice = () => {
		return (
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			navigator.msMaxTouchPoints > 0
		);
	};

	useEffect(() => {
		if (isTouchDevice()) return;

		const handleMouseMove = (e) => {
			const inactiveTarget = e.target.closest("[data-cursor-inactive]");

			if (inactiveTarget) {
				// Hide cursor completely for these elements
				customCursor.current.classList.remove("custom-cursor--show");
				return; // stop further processing
			}

			customCursor.current.classList.add("custom-cursor--show");
			let x = e.clientX;
			let y = e.clientY;

			customCursor.current.style.left = x + "px";
			customCursor.current.style.top = y + "px";
		};

		const handleMouseLeave = (e) => {
			const inactiveTarget = e.target.closest("[data-cursor-inactive]");

			if (inactiveTarget) {
				// Show cursor again when leaving inactive element
				customCursor.current.classList.add("custom-cursor--show");
				return;
			}

			customCursor.current.classList.remove("custom-cursor--show");
		};

		const activeCursor = (e) => {
			const target = e.target.closest("[data-cursor-text]");

			if (target) {
				setActive(true);
				setText(target.getAttribute("data-cursor-text"));
			}
		};

		const inactiveCursor = (e) => {
			const target = e.target.closest("[data-cursor-text]");

			if (target) {
				setActive(false);
				setText("");
			}
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseleave", handleMouseLeave);
		document.addEventListener("mouseover", activeCursor);
		document.addEventListener("mouseout", inactiveCursor);
		document.addEventListener("click", inactiveCursor);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseleave", handleMouseLeave);
			document.removeEventListener("mouseover", activeCursor);
			document.removeEventListener("mouseout", inactiveCursor);
			document.removeEventListener("click", inactiveCursor);
		};
	}, []);

	return (
		<div
			ref={customCursor}
			className={`custom-cursor ${active ? "custom-cursor--active" : ""}`}
		>
			{text && <span>{text}</span>}
		</div>
	);
};

export default CustomCursor;
