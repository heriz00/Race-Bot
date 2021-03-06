import displayBoka from "./boka.js";
import startRace from "./race.js";
import Discord from "discord.js";
import Token from "./token.json";

(function () {
  const bot = new Discord.Client();

  const token = Token.token;

  const PREFIX = "`";

  bot.on("ready", () => {
    console.log("Bot is online!");
  });

  bot.on("message", message => {
    let args = message.content.substring(PREFIX.length).split(" ");
    if (message.content.startsWith(PREFIX)) {
      switch (args[0]) {
        case "baka":
          displayBoka(args, message);
          break;
        case "avatar":
          message.channel.send(message.author.avatarURL());
          break;
        case "race":
          startRace(args, message, bot);
          break;
        case "gn":
          message.channel.send(`Good Night ${args[1]}`);
      }
    }
  });

  bot.login(token);
})();
