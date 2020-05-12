const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  let xdemb = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle("Generic commands")
        .addField("Admin Commands -----> 👊🏻", 'Ban, unban, kick, clear, say, addrole, removerole, mute, unmute, warn, lockdown, lockdown release, warns, serverstats')                                                                                                                                                                                                                                                         
        .addField("Fun Commands -----> 🥂", '  8ball, cat, dog, clap, joke, kill, morse, reverse, gay, meme, burn, hug, corona, coronatop, insult')                    
        .addField("Utility Commands -----> 💡", `avatar, botinfo, userinfo, invite, support, serverinfo, weather`)
        .addField("NSFW Commands -----> 🔒", '4k, anal, ass, hentai, holo, pussy, thigh, boobs')
        .addField("Welcome Manager <BETA> -----> 📥", 'For custom welcome channel use >setwlc')
        .addField("Moderation Logs -----> 📌", 'For automatical logs make >logs')
        .addField("Music -----> 🎵", 'play , stop , np (now play), queue , pause, resume.')
        .addField("Support Server", "[Click to join support Server](https://discord.gg/qaEq3bh)")
  
  message.channel.send(xdemb);
  
      }
      module.exports.help = {
        name: "help"
      }
  
