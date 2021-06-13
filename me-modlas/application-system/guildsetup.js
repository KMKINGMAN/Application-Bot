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