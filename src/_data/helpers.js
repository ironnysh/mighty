export default {
	environment: process.env.ELEVENTY_ENV,

	currentYear() {
		const today = new Date();
		return today.getFullYear();
	},

	lastUpdate() {
		const today = new Date();
		return today.toLocaleDateString(undefined, {
		day: "2-digit",
		month: "long",
		year: "numeric",
		});
	},
};