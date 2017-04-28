const {cat} = require("random-animal");

exports.run = (bot, message) => {
	cat().then(url => {
		message.channel.send(url);
	});
};

exports.info = {
	name: "cat",
	description: "Sends a random cat image.",
	type: "general",
	use: "cat",
	aliases: []
};
