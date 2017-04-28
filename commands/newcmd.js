exports.run = (bot, message, args) => {
	if (!args.length) return console.log("No command file specified!");
	try {
		const cmdFile = require(`./${args[0]}.js`);

		bot.commands.set(args[0], cmdFile);

		for (let i = cmdFile.info.aliases.length; i--;) bot.aliases.set(cmdFile.info.aliases[i], args[0]);

		console.log("New command set!");
	} catch (err) {
		if (bot.commands.has(args[0])) bot.commands.delete(args[0]);
		console.error(err);
	}
};

exports.info = {
	name: "newcmd",
	type: "utility",
	description: "Registers a new command.",
	use: "newcmd [command name]",
	aliases: [
		"addcmd"
	]
};
