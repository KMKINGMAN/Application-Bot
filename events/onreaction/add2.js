/**
.-----------------------------------------------------------------------------.
||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  KINGMAN    |
||__| |___|___|___|___|___| |___|___|___|___|___|              +962792914245  |
| _____________________________________________     ________    ___________   |
||~  |! |" |§ |$ |% |& |/ |( |) |= |? |` || |<-|   |Del|Help|  |{ |} |/ |* |  |
||`__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|´_|\_|__|   |___|____|  |[ |]_|__|__|  |
||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |
||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |
||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |<'|               |4 |5 |6 |+ |  |
||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |
||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |
||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |
|   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |
|   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |
|                    https://github.com/KMKINGMAN                             |
`-----------------------------------------------------------------------------'
 */
const { MessageEmbed } = require("discord.js");
const { MessageAttachment } = require("discord.js");
const si = require("../../me-modlas/application-system/guildsetup")
const sa = require('../../me-modlas/application-system/application')
module.exports = {
	name: 'messageReactionAdd',
	async execute(reaction, user, client) {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch(); 
    if(reaction.emoji.name === '❌'){
      let gdata = await si.findOne({GuildID:reaction.message.guild.id})
    if(!gdata) return;
    if(!reaction.message.guild.member(user).hasPermission('MANAGE_ROLES')) return
    if(user.bot) return;
    let data = await sa.findOne({MsgID:reaction.message.id})
    if(!data) return;
    let es2 = new MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({ dynamic: true, size: 1024 }))
    .setColor('BLUE')
    .setDescription(`**<@${data.UserID}> has been rejected by <@${user.id}>**`)
    .setFooter(reaction.message.guild.name, client.user.avatarURL({ dynamic: true, size: 1024 }))
    try {
      reaction.message.channel.send(es2).then(async e =>{
        let x = await sa.findOneAndRemove({MsgID:reaction.message.id})
      })
    } catch(e) {
      console.log(` `)
    }
    }
  }
}
