const callbackJunk = (req, res) => {
    const junks = [];
    var junk1 = {
        "name": "Baseball",
        "crafting item": "Cork" + " - " + "Leather",
        "weight": 0.5,
        "value": 4
    };
    var junk2 = {
        "name": "Desk Fan",
        "crafting item": "Gear (2)" + " - " + "Screw (2)" + " - " + "Steel (2)",
        "weight": 3,
        "value": 4
    };
    var junk3 = {
        "name": "Duct Tape",
        "item": 2,
        "crafting item": "Adhesive" + " - " + "Cloth",
        "weight": 0.1,
        "value": 12
    };
    var junk4 = {
        "name": "Fancy Hairbrush",
        "item": 2,
        "crafting item": "Plastic" + " - " + "Silver (2)",
        "weight": 0.5,
        "value": 9
    };
    var junk5 = {
        "name": "Ladle",
        "crafting item": "Steel (2)",
        "weight": 0.5,
        "value": 2
    };
    var junk6 = {
        "name": "Oven Mitt",
        "crafting item": "Asbestos" + " - " + "Cloth (2)",
        "weight": 1,
        "value": 1
    };
    var junk7 = {
        "name": "Paint Can",
        "crafting item": "Oil (2)" + " - " + "Steel (2)",
        "weight": 5,
        "value": 10
    };
    var junk8 = {
        "name": "Research Test Tube",
        "crafting item": "Glass",
        "weight": 0.1,
        "value": 1
    };
    var junk9 = {
        "name": "Silver Table Knife",
        "crafting item": "Silver",
        "weight": 0.1,
        "value": 4
    };
    var junk10 = {
        "name": "Tin Can",
        "crafting item": "Steel (2)",
        "weight": 0.1,
        "value": 1
    };
    var junk11 = {
        "name": "Toy Rocketship",
        "crafting item": "Aluminum" + " - " + "Plastic (2)",
        "weight": 0.5,
        "value": 7
    };
    var junk12 = {
        "name": "Unused Flip Lighter",
        "crafting item": "Oil" + " - " + "Spring" + " - " + "Steel",
        "weight": 0.5,
        "value": 21
    };
    var junk13 = {
        "name": "Wondedrglue",
        "item": 2,
        "crafting item": "Adhesive (2)",
        "weight": 0.1,
        "value": 20
    };
    junks.push(junk1, junk2, junk3, junk4, junk5, junk6,
         junk7, junk8, junk9, junk10, junk11, junk12);
    res.send(junks);
};

module.exports = callbackJunk;
