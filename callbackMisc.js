const callbackMisc = (req, res) => {
    const misc = [];
    var misc1 = {
        "name": "Bobby Pin",
        "item": 21,
        "weight": 0.1,
        "value": 1
    };
    misc.push(misc1);
    res.send(misc);
};

module.exports = callbackMisc;
