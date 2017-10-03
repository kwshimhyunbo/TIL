function getShortMessages(messages) {
    var filtered = messages.filter(function (msg) {
        return msg.message && msg.message.length < 50;
    });

    return filtered.map(function (msg) {
        return msg.message;
    });
}

module.exports = getShortMessages
