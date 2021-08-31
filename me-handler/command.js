/**
 * ------------------MeKINGMAN----------------------
 * | +962792914245          [muhammad Rafat Kurkar] |
 * --------------------------------------------------
 * |     kingmandev Discord Server Owner :)          |
 * --------------------------------------------------
         
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
