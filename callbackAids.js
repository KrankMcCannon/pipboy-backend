const callbackAids = (req, res) => {
    const aids = [];
    var aid1 = {
        "name": "cram",
        "HP restore": 25,
        "added effect": "",
        "radiations": 5,
        "weight": 0.5,
        "value": 25,
        "addiction": "No",
        "recipe": "No",
        "plantable": "No"
    };
    var aid2 = {
        "name": "crispy squirrel bits",
        "HP restore": 35,
        "added effect": "",
        "radiations": 0,
        "weight": 0.1,
        "value": 6,
        "addiction": "No",
        "recipe": "Yes",
        "plantable": "No"
    };
    var aid3 = {
        "name": "bloodbug meat",
        "HP restore": 45,
        "added effect": "",
        "radiations": 9,
        "weight": 0.5,
        "value": 18,
        "addiction": "No",
        "recipe": "Composite",
        "plantable": "No"
    };
    var aid4 = {
        "name": "food paste",
        "HP restore": 50,
        "added effect": "END +1 for 3600s",
        "radiations": 0,
        "weight": 0.3,
        "value": 0,
        "addiction": "No",
        "recipe": "No",
        "plantable": "No"
    };
    var aid5 = {
        "name": "gazelle steak",
        "HP restore": 60,
        "added effect": "Carry Weight +25",
        "radiations": 0,
        "weight": 1,
        "value": 75,
        "addiction": "No",
        "recipe": "Yes",
        "plantable": "No"
    };
    var aid6 = {
        "name": "iguana soup",
        "HP restore": 95,
        "added effect": "",
        "radiations": 0,
        "weight": 1,
        "value": 21,
        "addiction": "No",
        "recipe": "Yes",
        "plantable": "No"
    };
    var aid7 = {
        "name": "hermit crab meat",
        "HP restore": 100,
        "added effect": "END +1 for 3600s",
        "radiations": 25,
        "weight": 1,
        "value": 80,
        "addiction": "No",
        "recipe": "Composite",
        "plantable": "No"
    };
    var aid8 = {
        "name": "deathclaw steak",
        "HP restore": 185,
        "added effect": "AGI +1 for 3600s",
        "radiations": 0,
        "weight": 1,
        "value": 130,
        "addiction": "No",
        "recipe": "Yes",
        "plantable": "No"
    };

    aids.push(aid1, aid2, aid3, aid4, aid5, aid6, aid7, aid8);
    res.send(aids);
};

module.exports = callbackAids;
