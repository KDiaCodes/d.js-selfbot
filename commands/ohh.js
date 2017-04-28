exports.run = (bot, message) => {
	message.channel.send({file:"./images/ohh.png"})
		.then(() => message.delete())
		.catch(console.error);
};

exports.info = {
	name: "ohh",
	type: "meme",
	description: "Sends ohh.png",
	use: "ohh",
	aliases: []
};
