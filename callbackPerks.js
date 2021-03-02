const callbackPerks = (req, res) => {
    const perks = [];
    var perk1 = {
        "name": "Better Criticals",
        "rank": 2,
        "description": "Your criticals now do twice as much extra damage."
    };
    var perk2 = {
        "name": "Big Leagues",
        "rank": 3,
        "description": "You now do 60% more melee weapon damage " + 
        "and gain an increased chance to disarm your opponent."
    };
    var perk3 = {
        "name": "Commando",
        "rank": 3,
        "description": "Attacks with automatic weapons do 60% " + 
        "more damage. Hip fire accuracy is improved even more."
    };
    var perk4 = {
        "name": "Gun Nut",
        "rank": 2,
        "description": "You gain access to Rank 2 gun mods"
    };
    var perk5 = {
        "name": "Rifleman",
        "rank": 3,
        "description": "Attacks with non-automatic rifles do 60% " + 
        "more damage and ignore 20% of a target's armor."
    };
    var perk6 = {
        "name": "Science!",
        "rank": 2,
        "description": "You gain access to Rank 2 high-tech mods."
    };
    var perk7 = {
        "name": "Toughness",
        "rank": 3,
        "description": "You now have +30 damage resistance."
    };
    perks.push(perk1, perk2, perk3, perk4, perk5, perk6, perk7);
    res.send(perks);
};

module.exports = callbackPerks;
