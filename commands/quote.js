const {RichEmbed} = require("discord.js");

exports.run = (bot, message, args) => {
	let channel = message.mentions.channels.first(), id, pos = 1;

	if (!channel) {
		if (bot.channels.has(args[0])) {
			channel = bot.channels.get(args[0]);
		} else if (message.mentions.users.size && args[0] == message.mentions.users.first().toString()) {
			channel = message.mentions.users.first().dmChannel;
			if (!channel) return console.log("No dm channel exists!");
		} else {
			pos = 0;
			channel = message.channel;
		}
	}

	if (!channel) return console.log("No valid channel provided!");

	if (!args[pos]) return console.log("No message ID provided!");
	else id = args[pos];

	channel.fetchMessages({around:id, limit:1}).then(messages => {
		const msg = messages.first();

		const embed = new RichEmbed().setAuthor(msg.member ? msg.member.displayName : msg.author.username, msg.author.displayAvatarURL)
			.setDescription(msg.content)
			.setTimestamp(msg.createdAt)
			.setFooter(`In ${channel.type === "text" ? `#${channel.name}` : `DM with ${channel.recipient.tag}`}`)
			.setColor(msg.member ? (msg.member.displayColor || 0x50a0ce) : 0x50a0ce);

		message.edit(message.content.split(" ").slice(2 + pos).join(" "), {embed}).catch(console.error);
	}).catch(() => console.error(`${id} is an invalid id!`));
};

exports.info = {
	name: "quote",
	type: "general",
	description: "Quotes a specified message.",
	use: "quote <channel or channel id or user mention> [message id]",
	aliases: []
};
