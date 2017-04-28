exports.run = bot => {
	bot.robomode = !bot.robomode;
	console.log(`Robomode ${bot.robomode ? "enabled" : "disabled"}!`);
};

exports.info = {
	name: "robomode",
	type: "meme",
	description: "Switches the state of robomode for the hackmud discord.",
	use: "robomode",
	aliases: []
};
