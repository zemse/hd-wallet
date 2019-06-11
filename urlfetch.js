const http = require('http');
const fetch = url => new Promise((resolve, reject) => {
  let receivedData = '';

  http.get(url, response => {
    //console.log(response); getting a nasty object of class incoming message
    response.on('data', chunk => {
      receivedData += chunk;
    });

    response.on('end', () => {
      resolve(receivedData);
    });
  });
});

//fetch('http://explorer.btcd.io/#/').then(console.log);

const getAddressDetails = async address => {
  const fetched = await fetch('http://20.184.13.116/v2/addr/'+address);
  return JSON.parse(fetched);
}

//getAddressDetails('15BRaAJyBoF4fpPGb41BJSL8TzpfK2Sapc').then(console.log);

module.exports = getAddressDetails;
