const {dog} = require("random-animal");

exports.run = (bot, message) => {
	dog().then(url => {
		message.channel.send(url);
	});
};

exports.info = {
	name: "dog",
	description: "Sends a random dog image.",
	type: "general",
	use: "dog",
	aliases: []
};
