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
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "devlopers",
   category: "devlopers",
   description: "This displays contact information with the developer",
   run: async (client, kmsg, args, PREFIX) => {
       let devloper = new MessageEmbed()
       .setTitle(`! Me » KINGMAN`)
       .setDescription(`**Muhammad Kurkar**
       __**I am an undergraduate student from northeastern university**__
       `)
       .addFields(
        { name: '**\📱 PhoneNumber**', value: '+962792914245', inline: false },
        { name: '**\📶 GitHub**', value: '**[click here]( https://github.com/MeKINGMAN )**', inline: false },
        { name: '**\❤️ Discord Server**', value: '**[MeCodes]( https://discord.gg/mecodes )**', inline: false },
       )
       .setImage('https://e.top4top.io/p_1965qprez1.gif')
       .setFooter('! Me » KINGMAN - MeCodes', 'https://e.top4top.io/p_1965qprez1.gif');
       kmsg.channel.send(devloper)

    }
 }
