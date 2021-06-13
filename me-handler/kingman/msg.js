/**
 * ------------------MeKINGMAN----------------------
 * | +962792914245          [muhammad Rafat Kurkar] |
 * --------------------------------------------------
 * |     MeCodes Discord Server Owner :)            |
 * --------------------------------------------------
     ..                                                                                     
    .;o:..                                                      ..:l;.                      
    .lXX0d:..                                                ..:d0XKc.                      
    .lXNNNX0d;..                                          ..:dOXNNNKc.                      
    .lXNNNNNNXOo;..                                    ..:d0XNNNNNNKc.                      
    .lXNNNNNNNNNXOo;.                               ..:d0XNNNNNNNNN0:.                      
    .lXNNNNNNNNNNNNXOo;.                         ..:d0XNNNNNNNNNXOo;.                       
    .lXNNNNNNNNNNNNNNNXOo,.                   ..:d0XNNNNNNNNNXOo;.                          
    .lXNNNNNOdxKNNNNNNNNNKkl,.             ..:d0XNNNNNNNNNXOo;.                             
    .lXNNNNNx..,lkKNNNNNNNNNKkl,.       ..:d0XNNNNNNNNNXOo;.     ....                       
    .lXNNNNNx.   .,lkKNNNNNNNNNKkl,....:d0XNNNNNNNNNXkl,.     ...',,.                       
    .lXNNNNNx.      .,lkKNNNNNNNNNKkxk0XNNNNNNNNNXkl;.     ...',;;;,.                       
    .lXNNNNNx.         .,lkKNNNNNNNNNNNNNNNNNNKkl,.     ...',;;;;;;,.                       
    .lXNNNNNx.   ...      .,lkKNNNNNNNNNNNNXkl,.     ...',,;;;;;;;,'.                       
    .lXNNNNNx.  ..,,'..      .,lkKNNNNNNKkl,.      ..',,;,,;,;;,,'..                        
    .lXNNNNNx.  ..,;;,,'..      .,lk00kl,.      ..',,;;;;;;,,'...                           
    .lXNNNNNx.  ..,;;;;;,,'..      ....      ..',,;;;;;;;,'...                              
    .lXNNNNNx.  ..,;;;;;;;;,,'..         ...',,;;;,;;,,'...       ...                       
    .lXNNNNNx.  ..,;;;;,;;;;;;,,...    ..',;;;;;;;,,'...       ...',.                       
    .lXNNNNNx.  ..,;;;,,,,,;;;;;;,''..',,;,;;;;;,'...       ...',;;,.                       
    .lXNNNNNx.  ..,;;;;,...',;;;;;;;;;;;;;;;;,'...       ...',;;;;;,.                       
      ,d0XNNNx.  ..,;;;;,.  ...',;;;;;;;;;,,'...       ...',;;;;;;;,,.                       
      ..:dOXx.  ..,;;;;'.     ...',;;;;,'..        ...',;;;;;;;,,'..                        
          ..:;.  ..,;;;;,..       ...'...        ...',;;;;;;;,,'...                          
                ..,;;;;,,'...                ...',,,;;;;;,,'..                              
                  .',;;;;;;;,'...          ...',;;;;;;;,,'..                                 
                  ...,,,;;,;;,,'...    ...',,;;;;;;,,'..                                    
                      ..',,;;;;;;,,'....',;;;;;;;,,'..                                       
                        ..',,;;;;;;;,,;;;;;;;,,'..                                          
                            ..',,;;;;;;;;;;,,'..                                             
                              ..',;;;;;,,'..                                                
                                  ..'''...                                                             
 */
const { MessageEmbed } = require("discord.js");
class ME {
  constructor(message){
    this.message = message
  }
  async GetUser(id){
    let user =  this.message.mentions.members.first() || this.message.guild.members.cache.get(id)
    if(!id){
      user = this.message.mentions.members.first()
    }
    return user
  }
  async GetChannel(id){
    let channel = this.message.mentions.channels.first() || this.message.guild.channels.cache.get(id)
    if(!id){
      channel = this.message.mentions.channels.first()
    }
    return channel
  }
  async SEND(x, y){
    let send = new MessageEmbed()
    .setColor('BLUE')
    .setAuthor(this.message.author.tag, this.message.author.avatarURL({ dynamic: true, size: 1024 }))
    .setTitle(`**\✅ ${x}**`)
    .setDescription(`**${y}**`)
    .setFooter(`Req By ${this.message.author.tag}`, this.message.author.avatarURL({ dynamic: true, size: 1024 }))
    this.message.channel.send(send)
    }
  async ERR(x){
    let err = new MessageEmbed()
    .setColor('YELLOW')
    .setAuthor(this.message.author.tag, this.message.author.avatarURL({ dynamic: true, size: 1024 }))
    .setTitle(`**\⚠ Error**`)
    .setDescription(`**\⛔ ${x}**`)
    .setFooter(`Req By ${this.message.author.tag}`, this.message.author.avatarURL({ dynamic: true, size: 1024 }))
    this.message.channel.send(err)
  }
  async GetRoles(id){
    let role;
    if(!id){
      role = this.message.mentions.roles.first() 
    }
    role = this.message.mentions.roles.first() || this.message.guild.roles.cache.get(id)
    return role;
  }
  async GetRoles2(id){
    let role =  this.message.guild.roles.cache.get(id)
    return role;
  }
}
module.exports = {
	ME
}