export const setTols = (key, value) => {
	window.localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLs = (key) => {
	const value = window.localStorage.getItem(key);

	if (value) {
		return JSON.parse(value);
	}
};
