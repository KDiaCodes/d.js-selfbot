module.exports = (bot, message) => {
	console.log("Message from:", message.author.tag);
	message.guild ? console.log("Guild:", message.guild.name) : console.log("In DM");
	if (message.channel.name) console.log("Channel:", message.channel.name);
	console.log("Content:", message.content);

	bot.deleted.set(message.author.id, message);
};
