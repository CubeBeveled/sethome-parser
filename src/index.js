const fs = require("fs");
const yaml = require("js-yaml");

let data = yaml.load(fs.readFileSync("homes.yml", "utf8"));
console.log(data)

//data.homes = data.homes.filter(home => home.world !== null);
//fs.writeFileSync("homes.yml", yaml.dump(data));