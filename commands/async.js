const {RichEmbed} = require("discord.js");
const inspect = require("util").inspect;
const mTime = require("microtime");

exports.run = async (bot, message, args) => {
	const code = args.join(" ");

	try {
		if (/return bot\.(?:token|config(?:\.token|\.customsearch\.?\w*)?);?$/.test(code)) throw '"I won\'t do that."';

		if (!code) return console.log("No code provided!");

		const start = mTime.nowDouble();
		let evaled = await eval(`(async () => {${code}})()`);
		const runTime = (mTime.nowDouble() - start) * 1000;

		if (typeof evaled !== "string") evaled = inspect(evaled);
		if (evaled.length > 2036) throw new Error("Output too long, saved to console");

		message.edit(`**INPUT:** \`${code}\``, {embed: new RichEmbed()
			.setTitle("**OUTPUT**")
			.setDescription("```js\n" + evaled.replace(/`/g, "`\u200b") + "\n```")
			.setFooter(`Runtime: ${runTime.toFixed(3)}ms`, "https://cdn.discordapp.com/attachments/286943000159059968/298622278097305600/233782775726080012.png")
			.setColor(24120)
		}).catch(console.error);
		console.log(code + "\n" + evaled);
	} catch (err) {
		message.edit("**INPUT:** `" + code + "`", {
			embed: {
				title: "<:panicbasket:267397363956580352>ERROR<:panicbasket:267397363956580352>",
				description: `\`\`\`xl\n${err}\n\`\`\``,
				color: 13379110
			}
		}).catch(console.error);
		console.error(err);
	}
};

exports.info = {
	name: "async",
	type: "utility",
	description: "Evaluates code from a provided string.\nAllows use of the `await` keyword.",
	use: "async [code]",
	aliases: [
		"aeval",
		"aval",
		"asynceval",
		"asyncrun"
	]
};