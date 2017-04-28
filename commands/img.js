const fs = require("fs");

exports.run = (bot, message, args) => {
	fs.readdir("./images", (err, files) => {
		if (err) return console.error(err);

		const toUse = files.find(a => a.startsWith(args.join(" "))), file = `./images/${toUse}`;

		if (!toUse) return console.log("File not found.");

		message.channel.send({file})
			.then(() => message.delete())
			.catch(console.error);
	});
};

exports.info = {
	name: "img",
	description: "Sends a specified image.",
	type: "meme",
	use: "img [image name]",
	aliases: [
		"image"
	]
};
