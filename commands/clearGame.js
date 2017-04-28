exports.run = bot => {
	bot.user.setGame(null)
		.then(() => console.log("Game cleared."))
		.catch(console.error);
};

exports.info = {
	name: "clearGame",
	type: "utility",
	description: "Clears the game currently being played.",
	use: "clearGame",
	aliases: []
};
