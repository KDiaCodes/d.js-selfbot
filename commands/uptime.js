const {RichEmbed} = require("discord.js");
const moment = require("moment");

require("moment-duration-format");

exports.run = (bot, message) => {
	const uptime = process.uptime() * 1000, readyTime = bot.uptime;
	const embed = new RichEmbed()
		.setTitle("Uptime")
		.addField("Process", moment.duration(uptime).format("D [days], H [hrs], m [mins], s [secs]"))
		.addField("Client (Since Last Ready)", moment.duration(readyTime).format("D [days], H [hrs], m [mins], s [secs]"))
		.addField("Delay", `${((uptime - readyTime) / 1000).toFixed(3)} Seconds`)
		.addField("Command Load Time", `${bot.loadFinalized.toFixed(3)}ms`)
		.setColor(0x3ed8b2)
		.setTimestamp();
	
	message.channel.send({embed});
};

exports.info = {
	name: "uptime",
	type: "utility",
	description: "Displays the current bot uptime.",
	use: "uptime",
	aliases: [
		"runtime"
	]
};
