const { client } = require('../../main');
module.exports.onLoad = async function () {
    if(!client.config['botName']) return;
    try {
        client.on('botReady', () => {
            client.guilds.fetch(client.guildID)
            .then(guild => {
                guild.members.fetch(client.user)
                    .then(gm => gm.setNickname(client.config['botName']));
            });
        });
    } catch (err) {
        console.error(err);
    }
};