exports.run = async (client) => {
    try {
        const content = client.tline.slice(client.tline.indexOf("#")+1);
        client.channels.fetch(client.args[0])
            .then(c => c.send(content));
    } catch (err) {
        console.error(err);
        console.error("\n\nIs the '#' missing?");
    }
};