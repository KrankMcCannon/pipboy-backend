const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());

//import tab stat
const callbackSpecial = require("./callbackSpecial");
const callbackPerks = require("./callbackPerks");

//special
app.get("/stat/special", callbackSpecial);

//perks
app.get("/stat/perks", callbackPerks);

//import tab inv
const callbackWeapons = require("./callbackWeapons");
const callbackArmor = require("./callbackArmor");
const callbackAids = require("./callbackAids");
const callbackMisc = require("./callbackMisc");
const callbackJunk = require("./callbackJunk");
const callbackAmmo = require("./callbackAmmo");

//weapons
app.get("/inv/weapons", callbackWeapons);

//armor
app.get("/inv/apparel", callbackArmor);

//aids
app.get("/inv/aids", callbackAids);

//misc
app.get("/inv/misc", callbackMisc);

//junk
app.get("/inv/junk", callbackJunk);

//ammo
app.get("/inv/ammo", callbackAmmo);

//import tab data
const callbackStats = require("./callbackstats");

//stats
app.get("/data/stats", callbackStats);

app.get("/", (_, res) => {
  res.send(
    '<a href="http://localhost:3000/stat/">stat</a>, ' +
    '<a href="http://localhost:3000/inv">inv</a>, ' +
    '<a href="http://localhost:3000/data">data</a>'
  );
});

app.get("/stat", (_, res) => {
    res.send(
      '<a href="http://localhost:3000/stat/special">special</a>, ' +
      '<a href="http://localhost:3000/stat/perks">perks</a>'
    );
});

app.get("/inv", (_, res) => {
  res.send(
      '<a href="http://localhost:3000/inv/weapons">weapons</a>, ' +
      '<a href="http://localhost:3000/inv/apparel">armor</a>, ' +
      '<a href="http://localhost:3000/inv/aids">aids</a>, ' + 
      '<a href="http://localhost:3000/inv/misc">misc</a>, ' +
      '<a href="http://localhost:3000/inv/junk">junk</a>, ' +
      '<a href="http://localhost:3000/inv/ammo">ammo</a>'
  );
});

app.get("/data", (_, res) => {
  res.send(
    '<a href="http://localhost:3000/data/stats">stats</a>'
  );
});

app.listen(port, () => {
  console.log(
    `Esempio di listening app all'indirizzo http://localhost:${port}`
  );
});
