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
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const fs = require("fs")
const colors = require("colors");
let table = new ascii("Commands");
table.setHeading("Command", "Load status");

module.exports = (client) => {
    readdirSync("./command/").forEach(dir => {
        const commands = readdirSync(`./command/${dir}/`).filter(file => file.endsWith(".js"));

        for (let file of commands) {
            let pull = require(`../command/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌`);
                continue;
            }
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    console.log(table.toString().brightCyan);    
}