exports.run = bot => {
	console.log("Shutting down...");
	bot.user.setGame(null).then(() => require("child_process").exec("pm2 stop selfbot", null, () => process.exit()));
};

exports.info = {
	name: "exit",
	type: "utility",
	description: "Entirely shuts down the bot using pm2.",
	use: "exit",
	aliases: [
		"quit"
	]
};
