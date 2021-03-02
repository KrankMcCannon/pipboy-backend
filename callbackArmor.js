const callbackArmor = (req, res) => {
    const armor = [];
    var armor1 = {
        "name": "marine armor helmet",
        "damage_resist": 19,
        "energy_resist": 19,
        "radiation_resist": 10,
        "weight": 14,
        "value": 90,
    };
    var armor2 = {
        "name": "marine armor chest piece",
        "damage_resist": 50,
        "energy_resist": 49,
        "radiation_resist": 10,
        "weight": 25,
        "value": 210,
    };
    var armor3 = {
        "name": "marine armor right arm",
        "damage_resist": 22,
        "energy_resist": 22,
        "radiation_resist": 10,
        "weight": 14,
        "value": 140,
    };
    var armor4 = {
        "name": "marine armor left arm",
        "damage_resist": 22,
        "energy_resist": 22,
        "radiation_resist": 10,
        "weight": 14,
        "value": 140,
    };
    var armor5 = {
        "name": "marine armor right leg",
        "damage_resist": 23,
        "energy_resist": 23,
        "radiation_resist": 10,
        "weight": 14,
        "value": 175,
    };
    var armor6 = {
        "name": "marine armor left leg",
        "damage_resist": 23,
        "energy_resist": 23,
        "radiation_resist": 10,
        "weight": 14,
        "value": 175,
    };
    var armor7 = {
        "name": "synth field helmet",
        "damage_resist": 9,
        "energy_resist": 11,
        "radiation_resist": 0,
        "weight": 3,
        "value": 33,
    };
    var armor8 = {
        "name": "heavy synth chest piece",
        "damage_resist": 37,
        "energy_resist": 42,
        "radiation_resist": 0,
        "weight": 17,
        "value": 175,
    };
    var armor9 = {
        "name": "heavy synth right arm",
        "damage_resist": 17,
        "energy_resist": 20,
        "radiation_resist": 0,
        "weight": 10,
        "value": 110,
    };
    var armor10 = {
        "name": "heavy synth left arm",
        "damage_resist": 17,
        "energy_resist": 20,
        "radiation_resist": 0,
        "weight": 10,
        "value": 110,
    };
    var armor11 = {
        "name": "heavy synth right leg",
        "damage_resist": 16,
        "energy_resist": 19,
        "radiation_resist": 0,
        "weight": 10,
        "value": 130,
    };
    var armor12 = {
        "name": "heavy synth left leg",
        "damage_resist": 16,
        "energy_resist": 19,
        "radiation_resist": 0,
        "weight": 10,
        "value": 130,
    };

    armor.push(armor1, armor2, armor3, armor4, armor5, armor6, 
        armor7, armor8, armor9, armor10, armor11, armor12);
    res.send(armor);
};

module.exports = callbackArmor;
