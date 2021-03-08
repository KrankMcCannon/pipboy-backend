const callbackWeapons = (req, res) => {
    const weapons = [];
    var w1 = {
        "Name": "10mm Pistol",
        "Damage": 18,
        "Ammo": 200,
        "Rate": 46,
        "Range": 83,
        "Accuracy": 60,
        "Weight": 3.5,
        "Value": 50
    };
    var w2 = {
        "Name": "Baseball Bat",
        "Damage": 28,
        "Ammo": 200,
        "Speed": "SLOW",
        "Weight": 3,
        "Value": 25
    };
    var w3 = {
        "Name": "Fat Man",
        "Damage": 468,
        "Ammo": 100,
        "Rate": 1,
        "Range": 117,
        "Accuracy": 63,
        "Weight": 30.7,
        "Value": 512
    };
    var w4 = {
        "Name": "Fragmentation Mine",
        "Damage": 101,
        "Item": 6,
        "Rate": 0,
        "Range": 93,
        "Accuracy": 0,
        "Weight": 0.5,
        "Value": 50
    };
    var w5 = {
        "Name": "Laser Musket",
        "Damage": 33,
        "Ammo": 100,
        "Rate": 6,
        "Range": 215,
        "Accuracy": 72,
        "Weight": 15.4,
        "Value": 73
    };
    var w6 = {
        "Name": "Machete",
        "Damage": 24,
        "Speed": "MEDIUM",
        "Weight": 2,
        "Value": 25
    };
    var w7 = {
        "Name": "Minigun",
        "Damage": 8,
        "Ammo": 100,
        "Rate": 272,
        "Range": 131,
        "Accuracy": 35,
        "Weight": 27.4,
        "Value": 382
    };
    var w8 = {
        "Name": "Molotov Cocktail",
        "Damage": 162,
        "Item": 3,
        "Rate": 0,
        "Range": 93,
        "Accuracy": 0,
        "Weight": 0.5,
        "Value": 20
    };
    var w9 = {
        "Name": "Pipe Bolt-Action Pistol",
        "Damage": 35,
        "Ammo": 100,
        "Rate": 2,
        "Range": 95,
        "Accuracy": 63,
        "Weight": 3.2,
        "Value": 30
    };
    var w10 = {
        "Name": "Short Double-Barrel Shotgun",
        "Damage": 47,
        "Ammo": 100,
        "Rate": 36,
        "Range": 47,
        "Accuracy": 16,
        "Weight": 9,
        "Value": 39
    };

    weapons.push(w1, w2, w3, w4, w5, w6, w7, w8, w9, w10);
    res.send(weapons);
};

module.exports = callbackWeapons;
