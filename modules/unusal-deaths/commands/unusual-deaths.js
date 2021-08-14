const {MessageEmbed} = require('discord.js');
const list = require('../unde_list');
module.exports.run = function (client, msg, args) {
    switch (args[0]) {
        case 'list':
            try {
                console.log(list[args[1]][1]);
                msg.channel.send(list[args[1]][1]);
            } catch (error) {
                console.error(error)
            }
            break;
    
        default:
            break;
    }
}

module.exports.help = {
    'name': 'unusual-deaths',
    'description': 'Gives you access to the unusual deaths list',
    'module': 'unusal-deaths',
    'aliases': ['unusual-deaths', 'ud', 'unusuald', 'unusualdeaths', 'udeaths']
};
module.exports.config = {
    'restricted': false,
    'args': true
};