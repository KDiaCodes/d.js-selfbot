const slash = require("../slash.js");

module.exports = (bot, message) => {
	const regex = /^\/([^ ]+) ?/;
	
	if (message.author !== bot.user) return;

	const slashCMD = regex.exec(message.content);

	if (slashCMD && slash[slashCMD[1]]) return slash[slashCMD[1]](bot, message);

	if (!message.content.startsWith(bot.config.prefix)) {
		if (bot.robomode && message.guild.id == "229545531104296960") message.edit(`:::${message.content} ~engibot_epiczeus:::`);

		return;
	}
	
	const [command, ...args] = message.content.slice(bot.config.prefix.length).split(/ +/);
	let cmdFile = bot.commands.get(command.toLowerCase());
	
	if (!cmdFile) cmdFile = bot.commands.get(bot.aliases.get(command));

	if (cmdFile) cmdFile.run(bot, message, args);
};
