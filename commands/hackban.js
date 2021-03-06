const {User, GuildMember} = require("discord.js");

exports.run = (bot, message, args) => {
	if (!args[0]) return console.log("User ID to ban not provided.");
	else if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return console.log("You don't have ban permission.");
	
	message.guild.ban(args[0]).then(user => {
		let banMSG;
		
		if (user instanceof GuildMember) banMSG = `${user.user.tag}`;
		else if (user instanceof User) banMSG = `${user.tag}`;
		else banMSG = `User ID ${user}`;
		banMSG += " was banned.";
		
		console.log(banMSG);
		message.channel.send(banMSG, {code:true});
	}).catch(console.error);
};

exports.info = {
	name: "hackban",
	type: "admin",
	description: "Bans a user from a guild by ID.",
	use: "hackban [user id]",
	aliases: [
		"idban",
		"hackbanne",
		"hackbean"
	]
};
