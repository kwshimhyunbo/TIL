# Use Array filter to write a function called getShortMessages. getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long. The function should return an array containing the messages themselves, without their containing object.


## Solution
                function getShortMessages(messages) {
                    var filtered = messages.filter(function (msg) {
                        return msg.message && msg.message.length < 50;
                    }); //1차 필터링후

                    return filtered.map(function (msg) {
                        return msg.message; //메세지들만 골라서 return
                    });
                }

                module.exports = getShortMessages
