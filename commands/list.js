const {RichEmbed} = require("discord.js");

exports.run = (bot, message, args) => {
	const embed = new RichEmbed();

	if (!args[0]) return console.log("Must provide a type!");
	if (args[0] == "types") {
		const types = [];

		bot.commands.forEach(a => a.info && !types.includes(a.info.type) ? types.push(a.info.type) : undefined);

		embed.setTitle("Types")
			.setDescription(types.sort().join("\n"))
			.setColor(24120);

		return message.edit({embed}).catch(console.error);
	}
	const list = bot.commands.filter(a => a.info.type == args[0]);

	if (!list) return console.log(`${args[0]} is not a valid type!`);
	embed.setTitle(args[0].replace(/^(.)/, l => l.toString().toUpperCase()))
		.setDescription(list.map(a => a.info.name).sort().join("\n"))
		.setColor(24120);
	message.edit({embed}).catch(console.error);
};

exports.info = {
	name: "list",
	type: "utility",
	description: "Lists all commands of a specified type",
	use: "list [type or 'types']",
	aliases: []
};
