const fs = require("fs");

exports.run = (bot, message, args) => {
	const game = args.join(" ");
	
	if (!game) return console.log("No game defined!");
	bot.config.startGame = game;
	bot.user.setGame(game).catch(console.error);
	fs.writeFile("./config.json", JSON.stringify(bot.config, null, "\t"), err => err ? console.error(err) : console.log("Updated config successfully!"));
};

exports.info = {
	name: "setStartGame",
	type: "utility",
	description: "Sets the game that is set on startup, and makes it the currently active game.",
	use: "setStartGame [game]",
	aliases: [
		"startGame"
	]
};
