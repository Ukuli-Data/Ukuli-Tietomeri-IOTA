const Iota = require('@iota/core`);

var settings = {network: "http-client", provider: "http://localhost:14265", attachToTangle: "attachToTangle", apiVersion = 1, requestBatchSize = 1000}
   
var iota = Iota.core.composeApi(settings);

var address = "";

iota.getBalances([address])
  .then( balances => {
    console.log(`Balance of the first address: `$balances.balances[0]);
    console.log(JSON.stringify(transactions));
  });
  .catch(error => {
    console.log(`Something went wrong: ${error}`);
};

