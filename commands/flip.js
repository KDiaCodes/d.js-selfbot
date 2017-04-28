const coin = ["heads", "tails"];

exports.run = (bot, message) => {
	message.channel.send(`You got ${coin[~~(Math.random() * 100) % 2]}!`).catch(console.error);
};

exports.info = {
	name: "flip",
	type: "general",
	description: "Flips a coin.",
	use: "flip",
	aliases: []
};
