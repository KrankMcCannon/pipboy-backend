const callbackStats = (req, res) => {
    const stats = [];
    var stats1 = {
      "name": "General",
      "locations discovered": 0,
      "locations cleared": 0,
      "days passed": 0,
      "hours slept": 0,
      "hours waiting": 0,
      "caps found": 576,
      "most caps carried": 576,
      "junk collected": 30,
      "chests looted": 0,
      "magazines found": 0,
      "food eaten": 0,
      "stimpaks taken": 0,
      "rad-x taken": 0,
      "radaway taken": 0,
      "chems taken": 0,
      "fusion cores used": 0,
      "times addicted": 0,
      "mines disarmed": 0,
      "pants exploded": 0,
      "corpses eaten": 0,
      "persuasion successes": 0,
      "bobbleheads collected": 0,
      "sandman kills": 0,
      "paralyzing punches": 0,
      "robots hacked": 0,
      "mysterious stranger visits": 0,
      "investments made": 0,
      "animals friended": 0,
      "wasteland whispers": 0,
      "intimidations": 0,
      "cores ejected": 0,
      "bright ideas": 0
    };
    var stats2 = {
        "name": "Quest",
        "quests completed": 0,
        "misc objectives completed": 0,
        "main quests completed": 0,
        "side quests completed": 0,
    };
    var stats3 = {
        "name": "Combat",
        "people killed": 0,
        "animal killed": 0,
        "creatures killed": 0,
        "robots killed": 0,
        "synths killed": 0,
        "turrets killed": 0,
        "legendary enemies killed": 0,
        "critical strikes": 0,
        "sneak attacks": 0,
        "backstabs": 0,
        "weapon disarmed": 0,
        "grand slams": 0,
        "fits of rage": 0,
        "money shots": 0,
        "grim reaper sprints": 0,
        "four leaf clovers": 0,
        "ricochets": 0,
    };
    var stats4 = {
        "name": "Crafting",
        "weapon mods crafted": 0,
        "armor mods crafted": 0,
        "plants harvested": 0,
        "chems crafted": 0,
        "food cooked": 0,
        "workshops unlocked": 0,
        "items scrapped": 0,
        "objects built": 0,
        "supply lines created": 0,
    };
    var stats5 = {
        "name": "Crime",
        "looks picked": 0,
        "computers hacked": 0,
        "pockets picked": 0,
        "items stolen": 0,
        "assaults": 0,
        "murders": 0,
        "trespasses": 0,
    };
    stats.push(stats1, stats2, stats3, stats4, stats5);
    res.send(stats);
};

module.exports = callbackStats;
