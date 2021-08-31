/**
 * ------------------MeKINGMAN----------------------
 * | +962792914245          [muhammad Rafat Kurkar] |
 * --------------------------------------------------
 * |     KINGMANDEV Discord Server Owner :)          |
 * --------------------------------------------------                                                 
 */
const { Schema, model } = require('mongoose');
const GuildApplicatio = Schema({
    GuildID: {
        type: String,
        required: true
    },
    ChannelID:{
      type : String
    },
    Quzz :{
      type : [String]
    },
    Role :{
      type : String
    },
});
module.exports = model('Application Setup', GuildApplicatio);
