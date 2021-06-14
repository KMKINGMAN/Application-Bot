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
|                    https://github.com/MeKingman                             |
`-----------------------------------------------------------------------------'
 */
const si = require("../../me-modlas/application-system/guildsetup")
const sa = require('../../me-modlas/application-system/application')
const kingman = require('../../me-handler/kingman/msg')
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "refusal",
   category: "application",
   description: "This will reject the person who applied manually",
   run: async (client, kmsg, args, PREFIX) => {
     const me = new kingman.ME(kmsg)
     if(!kmsg.member.hasPermission('MANAGE_ROLES')){
       return me.ERR(`You need \`MANAGE_ROLES\`permissions to do this action`)
     }
     let data = await si.findOne({GuildID:kmsg.guild.id})
     if(!data){
       return me.ERR(`No Data Found`)
     }
     let user = await me.GetUser(args[0])
     if(!user){
       return me.ERR(`I Cant Find This User`)
     }
     let userdata = await sa.findOneAndDelete({GuildID:kmsg.guild.id,UserID:user.id})
     if(!userdata){
       return me.ERR(`Sorre This is invilde User`)
     }
    await me.SEND(`Deleted`,`This user deleted from our data bace <@${user.id}>`)

    }
 }
