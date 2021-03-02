const callbackAmmo = (req, res) => {
    const ammo = [];
    var ammo1 = {
        "name": ".308 Round",
        "item": 130,
        "weight": 0.1,
        "value": 3
    };
    var ammo2 = {
        "name": "10mm Round",
        "item": 120,
        "weight": 0.1,
        "value": 2
    };
    var ammo3 = {
        "name": "5.56 Round",
        "item": 125,
        "weight": 0.1,
        "value": 2
    };
    var ammo4 = {
        "name": "5mm Round",
        "item": 486,
        "weight": 0.1,
        "value": 1
    };
    var ammo5 = {
        "name": "Fusion Cell",
        "item": 64,
        "weight": 0.1,
        "value": 3
    };
    var ammo6 = {
        "name": "Mini Nuke",
        "item": 2,
        "weight": 0.1,
        "value": 100
    };
    var ammo7 = {
        "name": "Shotgun Shell",
        "item": 26,
        "weight": 0.1,
        "value": 3
    };
    ammo.push(ammo1, ammo2, ammo3, ammo4, ammo5, ammo6, ammo7);
    res.send(ammo);
};

module.exports = callbackAmmo;
