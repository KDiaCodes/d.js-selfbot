exports.run = () => {
	console.log("Restarting...");
	process.exit();
};

exports.info = {
	name: "restart",
	type: "utility",
	description: "Exits the process gracefully and lets pm2 turn it back on.",
	use: "restart",
	aliases: []
};
