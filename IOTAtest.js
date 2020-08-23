const Iota = require("@iota/core");

var settings = {provider: "http://gripen.ukuli.fi:14265"};
   
var iota = Iota.composeAPI(settings);

iota.addNeighbors(['tcp://hornet.ukuli.fi:15600'])
  .then(numberOfNeighbors => {
    console.log(`Successfully removed ${numberOfNeighbors} neighbors`)
  }).catch(error => {
    console.log(`Something went wrong: ${error}`)
  })
