const express = require("express");
const app = express();
const port = 3000;

//import tab stat
const callbackSpecial = require("./callbackSpecial");
const callbackPerks = require("./callbackPerks");

//special
app.get("/special", callbackSpecial);

//perks
app.get("/perks", callbackPerks);

//import tab inv
const callbackWeapons = require("./callbackWeapons");
const callbackArmor = require("./callbackArmor");
const callbackAids = require("./callbackAids");

//weapons
app.get("/weapons", callbackWeapons);

//armor
app.get("/apparel", callbackArmor);

//aids
app.get("/aids", callbackAids);

app.get("/", (_, res) => {
  res.send(
      '<a href="http://localhost:3000/special">special</a>, ' +
      '<a href="http://localhost:3000/perks">perks</a>, ' +
      '<a href="http://localhost:3000/weapons">weapons</a>, ' +
      '<a href="http://localhost:3000/apparel">armor</a>, ' +
      '<a href="http://localhost:3000/aids">aids</a>'
  );
});

app.listen(port, () => {
  console.log(
    `Esempio di listening app all'indirizzo http://localhost:${port}`
  );
});
