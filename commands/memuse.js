const {RichEmbed} = require("discord.js");

exports.run = (bot, message) => {
	const memory = process.memoryUsage(), embed = new RichEmbed();
	const memTotal = memory.heapTotal / 1024 / 1024, memUsed = memory.heapUsed / 1024 / 1024;
	
	embed.setTitle("Memory Usage")
		.setDescription(`${memUsed.toFixed(2)}/${memTotal.toFixed(2)}MB`)
		.setColor(0x2d8244)
		.setTimestamp();
	message.edit(message.content, {embed});
};

exports.info = {
	name: "memuse",
	type: "utility",
	description: "Displays the current memory usage of the bot.",
	use: "memuse",
	aliases: [
		"memory"
	]
};
