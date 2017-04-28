const fs = require("fs");

exports.run = (bot, message, args) => {
	if (!args[0]) {
		return message.reply("The current prefix is " + bot.config.prefix);
	} else if (args[0].length > 4) {
		return message.reply("The new prefix is too long");
	} else {
		bot.config.prefix = args[0];
		fs.writeFile('./config.json', JSON.stringify(bot.config, null, "\t"), err => err ? console.error(err) : console.log("Updated config successfully!"));
		message.reply("New prefix set to " + bot.config.prefix);
	}
};

exports.info = {
	name: "prefix",
	type: "utility",
	description: "Sets the prefix if a new one is provided or displays the current.",
	use: "prefix <new prefix>",
	aliases: []
};
