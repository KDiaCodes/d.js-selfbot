exports.run = (bot, message, args) => {
	bot.user.setGame(args.join(" "))
		.then(() => console.log(`New game set to ${args.join(" ")}.`))
		.catch(console.error);
};

exports.info = {
	name: "setGame",
	type: "utility",
	description: "Sets the game currently being played.",
	use: "setGame [game name]",
	aliases: []
};
