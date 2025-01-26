const fs = require("fs");
const yaml = require("js-yaml");

const data = new Map(Object.entries(yaml.load(fs.readFileSync("homes.yml", "utf8"))));

if (!fs.existsSync("playerdata")) fs.mkdirSync("playerdata");

data.forEach((v, k) => {
  const homes = {};
  const oldHomes = new Map(Object.entries(v));

  oldHomes.forEach((vv, kk) => {
    homes[kk] = vv;
  });

  fs.writeFileSync(`playerdata/${k}.yml`, yaml.dump({ homes }));
});