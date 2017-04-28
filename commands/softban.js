exports.run = (bot, message, args) => {
	const num = parseInt(args[1]), removeLength = args[1] && num < 8 && num > 1 ? num : 1;
	let member = message.mentions.members.first();

	if (!message.mentions.members.size) {
		member = message.guild.member(args[0]);

		if (!member) return console.log(`${args[0]} is not a mention or a valid user id.`);
	}
	if (!member.bannable || !message.member(bot.user).hasPermission("BAN_MEMBERS")) return console.log(`User ${member.user.username}#${member.user.discriminator} is not bannable.`);
	member.ban(removeLength)
		.then(user => message.guild.unban(user))
		.catch(console.error);
};

exports.info = {
	name: "softban",
	type: "admin",
	description: "Softly bans a member from a guild.",
	use: "softban [mention] <delete days>",
	aliases: [
		"softbanne",
		"softbend"
	]
};
