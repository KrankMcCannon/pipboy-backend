const callbackWeapons = (req, res) => {
    const weapons = [];
    var w1 = {
        "name": "double barrel shotgun",
        "damage": 162,
        "ammo": 100,
        "fire rate": 36,
        "range": 47,
        "accuracy": 16,
        "weight": 9,
        "value": 39
    };
    var w2 = {
        "name": "10mm pistol",
        "damage": 82.8,
        "ammo": 200,
        "fire rate": 46,
        "range": 83,
        "accuracy": 60,
        "weight": 3.5,
        "value": 50
    };
    var w3 = {
        "name": "assault rifle",
        "damage": 120,
        "ammo": 800,
        "fire rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    };
    var w4 = {
        "name": "final judgment",
        "damage": 476,
        "ammo": 1000,
        "fire rate": 340,
        "range": 203,
        "accuracy": 48,
        "weight": 19.3,
        "value": 3804
    };

    weapons.push(w1, w2, w3, w4);
    res.send(weapons);
};

module.exports = callbackWeapons;
