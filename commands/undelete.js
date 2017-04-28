const {RichEmbed} = require("discord.js");

exports.run = (bot, message, args) => {
	const embed = new RichEmbed();
	let msg = bot.deleted.get(message.mentions.users.first().id);

	if (!msg) msg = bot.deleted.get(args[0]);
	
	if (!msg) return console.log("No recently deleted message!");

	bot.deleted.delete(message.mentions.users.first().id);

	embed.setAuthor(msg.author.username, msg.author.displayAvatarURL)
		.setDescription(msg.content)
		.setColor(msg.member ? msg.member.displayColor : 0x50a0ce)
		.setFooter(`From: ${msg.guild ? msg.guild.name : "DM"}${msg.channel.name ? `, #${msg.channel.name}` : ""}`)
		.setTimestamp(msg.createdAt);

	message.edit(message.content.split(/ +/).slice(2).join(" "), {embed});
};

exports.info = {
	name: "undelete",
	description: "Resends a deleted message",
	type: "general",
	use: "undelete [user mention or id]",
	aliases: []
};
