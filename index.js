/**
 * ------------------MeKINGMAN----------------------
 * | +962792914245          [muhammad Rafat Kurkar] |
 * --------------------------------------------------
 * |     KINGMANDEV Discord Server Owner :)            |
 * --------------------------------------------------                                                     
 */
const kingman = require("./alive/keep_work.js")
const { MessageEmbed  ,  Collection , Client } = require("discord.js");
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
client.commands = new Collection();
client.eventss = new Collection();
client.aliases = new Collection();
const fs = require('fs');
kingman();
const colors = require("colors");
const TOKEN_BOT = process.env['ME_TOKEN']
const config = require('./me-config.json');
const PREFIX = config.prefix
client.on("error", console.error);
["command", "events"].forEach(p => {
  require(`./me-handler/${p}`)(client);
});
client.on('message', kmsg => {
  const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (kmsg.content.match(pmention)) {
    return kmsg.reply(`**MY PREFIX IS: ${PREFIX}**`)
  }
  if (kmsg.author.bot) return;
  if (!kmsg.guild) {
    return kmsg.reply("**ONLY WORK ON SERVERS NOT DM**")
  }
  if (!kmsg.content.startsWith(PREFIX)) return;
  const args = kmsg.content
    .slice(PREFIX.length)
    .trim() 
    .split(/ +/g); 
  const kmcommand = args.shift().toLowerCase();
  if (kmcommand.length === 0) return;
  let kmcode = client.commands.get(kmcommand);
  if (!kmcode) kmcode = client.commands.get(client.aliases.get(kmcommand));
  if (kmcode) kmcode.run(client, kmsg, args, PREFIX);
});


client.login(TOKEN_BOT)
