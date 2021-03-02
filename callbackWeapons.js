const callbackWeapons = (req, res) => {
    const weapons = [];
    var w1 = {
        "name": "10mm Pistol",
        "damage": 18,
        "ammo": 200,
        "fire rate": 46,
        "range": 83,
        "accuracy": 60,
        "weight": 3.5,
        "value": 50
    };
    var w2 = {
        "name": "Baseball Bat",
        "damage": 28,
        "ammo": 200,
        "speed": "SLOW",
        "weight": 3,
        "value": 25
    };
    var w3 = {
        "name": "Fat Man",
        "damage": 468,
        "ammo": 100,
        "fire rate": 1,
        "range": 117,
        "accuracy": 63,
        "weight": 30.7,
        "value": 512
    };
    var w4 = {
        "name": "Fragmentation Mine",
        "damage": 101,
        "item": 6,
        "fire rate": 0,
        "range": 93,
        "accuracy": 0,
        "weight": 0.5,
        "value": 50
    };
    var w5 = {
        "name": "Laser Musket",
        "damage": 33,
        "ammo": 100,
        "fire rate": 6,
        "range": 215,
        "accuracy": 72,
        "weight": 15.4,
        "value": 73
    };
    var w6 = {
        "name": "Machete",
        "damage": 24,
        "speed": "MEDIUM",
        "weight": 2,
        "value": 25
    };
    var w7 = {
        "name": "Minigun",
        "damage": 8,
        "ammo": 100,
        "fire rate": 272,
        "range": 131,
        "accuracy": 35,
        "weight": 27.4,
        "value": 382
    };
    var w8 = {
        "name": "Molotov Cocktail",
        "damage": 162,
        "item": 3,
        "fire rate": 0,
        "range": 93,
        "accuracy": 0,
        "weight": 0.5,
        "value": 20
    };
    var w9 = {
        "name": "Pipe Bolt-Action Pistol",
        "damage": 35,
        "ammo": 100,
        "fire rate": 2,
        "range": 95,
        "accuracy": 63,
        "weight": 3.2,
        "value": 30
    };
    var w10 = {
        "name": "Short Double-Barrel Shotgun",
        "damage": 47,
        "ammo": 100,
        "fire rate": 36,
        "range": 47,
        "accuracy": 16,
        "weight": 9,
        "value": 39
    };

    weapons.push(w1, w2, w3, w4, w5, w6, w7, w8, w9, w10);
    res.send(weapons);
};

module.exports = callbackWeapons;
