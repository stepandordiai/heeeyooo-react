const getStorage = () => {
	return localStorage.getItem("i18nextLng") || "en";
};

export default getStorage;
