exports.run = (bot, message) => {
	message.channel.send("Pong!").then(msg => {
		msg.edit("Calculated Ping```\n" +
			"Websocket:       " + Math.round(bot.ping) + "ms\n" +
			"Response Time:   " + (msg.createdTimestamp - message.createdTimestamp) + "ms\n" +
			"HTTP Round Trip: " + (Date.now() - message.createdTimestamp) + "ms\n```")
		.catch(console.error);
	});
};

exports.info = {
	name: "ping",
	type: "utility",
	description: "Displays the overall ping.",
	use: "ping",
	aliases: []
};
