const callbackSpecial = (req, res) => {    
    const specialities = [];
        var special1 = {
            "name": "Strength",
            "level": 10,
            "description": "Strength is a measure of your raw physical power." + 
            "It affetcs how much you can carry, and the damage of all melee attacks."
        };
        var special2 = {
            "name": "Perception",
            "level": 7,
            "description": "Perception is a measurement of your environmental and " + 
            "situational awareness. It directly affects weapon accuracy in V.A.T.S. " + 
            "(Vault-Tec Assisted Targeting System), lock-picking skills, and successful " + 
            "attempts at stealing items."
        };
        var special3 = {
            "name": "Endurance",
            "level": 8,
            "description": "A measure of your overall physical fitness. It affects " + 
            "your total Health and the Action Point drain from sprinting."
        };
        var special4 = {
            "name": "Charisma",
            "level": 11,
            "description": "Your ability to charm and convince others. It " + 
            "affects your success to persuade in dialogue, prices when you " + 
            "barter, and the maximum number of settlers in settlements."
        };
        var special5 = {
            "name": "Intelligence",
            "level": 8,
            "description": "A measure of your overall mental acuity. It " + 
            "affects the number of Experience Points earned and reduces " + 
            "the number of dud words when hacking terminals."
        };
        var special6 = {
            "name": "Agility",
            "level": 6,
            "description": "A measure of your overall finesse and reflexes. " + 
            "It affects the number of Action Points in V.A.T.S. and your " + 
            "ability to sneak."
        };
        var special7 = {
            "name": "Luck",
            "level": 9,
            "description": "A measure of your general good fortune and " + 
            "affects the recharge rate of critical hits."
        };
        specialities.push(special1, special2, special3, special4, special5, special6, special7);
        res.send(specialities);
};

module.exports = callbackSpecial;
