const regex = /(\d*)d(\d+|%)(?:(\+|-)(\d+))?/i;

exports.run = (bot, message, args) => {
	const [dice] = regex.exec(args[0]);

	if (!dice) {
		return console.log("Not a valid roll!");
	} else {
		bot.fudge.set(dice, args[1]);
		console.log("Fudge set.");
	}
};

exports.info = {
	name: "fudge",
	type: "general",
	description: "Sets a value for a fudged roll.",
	use: "fudge [roll to fudge] [value to roll]",
	aliases: []
};
