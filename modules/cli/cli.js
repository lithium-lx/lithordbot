const { client } = require('../../main');
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `${client.config['botName']}> `
})

module.exports.onLoad = async function () {
    //CLI
    try {
        client.on('cliReady', () => {
            rl.prompt();
        });
    } catch (err) {
        console.error(err);
    }
    rl.on('line', (line) => {
        client.tline = line.trim();
        const args = line.trim().split(" ");
        const cmd = args.shift();
        switch (cmd) {
            case 'emit':
                //This can emit events and passes cl args to a client attribute.
                //This can be used to exploit event calls as command calls.
                const eevent = args.shift();
                client.args = args;
                client.emit(eevent);
                console.log(`Emitted ${eevent}`);
                break;
            case 'eval':
                try {
                    eval(client.tline.slice(client.tline.indexOf("#")+1));
                } catch (error) {
                    console.error(error);
                }
            default:
                console.log(`'${cmd}' isn't a valid command`);
                break;
        }
        rl.prompt();
    }).on('close', () => {
        client.destroy();
        console.log('\nClient destroyed, exiting process. Bye Bye!');
        process.exit(0);
    });
};