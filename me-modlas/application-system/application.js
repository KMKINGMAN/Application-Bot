/**
 * ------------------MeKINGMAN----------------------
 * | +962792914245          [muhammad Rafat Kurkar] |
 * --------------------------------------------------
 * |     kingmadev Discord Server Owner :)           |
 * --------------------------------------------------
                                                
 */
const { Schema, model } = require('mongoose');
const UserSetting = Schema({
    UserID: {
      type: String,
      required: true
    },
    GuildID: {
        type: String,
        required: true
    },
    MsgID:{
      type : String,
    },
    Blocked : {
      type : Boolean,
      default: false
    },
    Content : {
      type : [String],
    }
});
module.exports = model('Application User Setting', UserSetting);
