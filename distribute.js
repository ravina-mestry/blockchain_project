// read in a file of accounts DONE
// count the number of accounts DONE
// get the remaining supply belonging to token owner DONE
// divide 5% of remaining supply between the accounts
// collect tea and medals

let fs = require("fs");

let distributionAddresses = fs.readFileSync("./accounts.txt", "utf8").split(",");

console.log(`number of distribution addresses are ${distributionAddresses.length}`);