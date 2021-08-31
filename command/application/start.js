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
const si = require("../../me-modlas/application-system/guildsetup")
const sa = require('../../me-modlas/application-system/application')
const kingman = require('../../me-handler/kingman/msg')
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "start",
   category: "application",
   description: "This command is used to run the Apply process",
   run: async (client, kmsg, args, PREFIX) => {
     const me = new kingman.ME(kmsg)
    let udata = await sa.findOne({
      GuildID:kmsg.guild.id,
      UserID:kmsg.author.id
    })
    if(!udata){
      udata = await sa.create({
        GuildID:kmsg.guild.id,
        UserID:kmsg.author.id
      })
      udata.save();
    }
    if(udata.Content[0]){
      return await me.ERR(`you are already applied to staff`)
    }
    if(udata.Blocked === true) {
      return await me.ERR(`You have been banned from applying`)
    }
    let adata = await si.findOne({GuildID:kmsg.guild.id})
    if(!adata){
      adata = await si.create({GuildID:kmsg.guild.id})
      adata.save()
    }
    if(!adata.ChannelID){
      return await me.ERR(`Please set-up the channel`)
    }
    if(!adata.Quzz[0]){
      return await me.ERR(`Please set-up the Questions`)
    }
    
    let applych = client.guilds.cache.get(kmsg.guild.id).channels.cache.get(adata.ChannelID);
    let questions = adata.Quzz
    let answer = []
    for(let i = 0; i < questions.length; i++){
      let filter = (m) => m.author.id === kmsg.author.id;
      let qusstion = await kmsg.channel.send(`**[${i+1}/${questions.length}] ${questions[i]} ?**`)
      let an = await kmsg.channel.awaitMessages(filter,{
        max: 1,
        time: 10000,
        errors: ["time"]
      }).catch(() => {
        return
        });
      try{
        qusstion.delete();
        an.first().delete();
        answer.push(`**[${i + 1}] ${questions[i]} : \`${an.first().content}\`**`)
      } catch(e) {
        return await me.ERR(`Apply Canceled\n \`Due To Time Limit Expired\``)
      }
  if(an.first().content === "cansel"){
    return await me.ERR(`Apply Canceled\n \`Due To Time Limit Expired\``)
  }
    }
    let qmsg = await me.SEND(`Answers have been obtained`, `Do you want to confirm your Apply?\n**・ ${answer.join(`\n・ `)}**`)//kmsg.channel.send(answer.join(`\n`))
    kmsg.channel.send(`**React [✅] to Confirm and [❌] to Cancele**`).then(m => {
      m.react(`✅`)
      m.react(`❌`)
      let re = (react, user) => react.emoji.name  === "✅" && user.id === kmsg.author.id;
      let re2 = (react, user) => react.emoji.name  === "❌" && user.id === kmsg.author.id;
      let rec = m.createReactionCollector(re, {time: 0});
      let re2c = m.createReactionCollector(re2, {time: 0});
      rec.on('collect', async c =>{
        let apply = new MessageEmbed()
        .setColor('GREEN')
        .setAuthor(kmsg.author.tag, kmsg.author.avatarURL({ dynamic: true, size: 1024 }))
        .setTitle(`**\✅ There is a new Applying**`)
        .setDescription(answer)
        .addField(`**UserID**`, `\`${kmsg.author.id}\``)
        .setFooter(`KINGMANDEV Apply System`, kmsg.author.avatarURL({ dynamic: true, size: 1024 }))
        let msgid = await applych.send(apply)
        msgid.react(`✅`)
        msgid.react(`❌`)
        let savedata = await sa.findOneAndUpdate({
              GuildID:kmsg.guild.id,
              UserID:kmsg.author.id
            }, {
          $push:{
            Content :answer
          }
        })
        let savedata2 = await sa.findOneAndUpdate({
              GuildID:kmsg.guild.id,
              UserID:kmsg.author.id
            }, {
          $set:{
            MsgID : msgid.id
          }
        })
        savedata.save()
        savedata2.save()
        m.edit(`**Apply has been sent**`).then(d => {
          d.delete({ timeout: 5000 })
        });
      })
      re2c.on('collect', async c2=>{
        m.edit(`**Apply has been Canceled**`).then(m2=>{
          m2.delete({ timeout: 5000 })
        })
      })
    })
    }
 }
