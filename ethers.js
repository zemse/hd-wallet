const ethers = require('ethers');

const betdeexAddress = '0x9132d17653eb20f8adc0694cb556dc08243765f7';
const betdeexAbi = require('./abi.js');



(async()=>{
  const privateKeys = await require('./ethereum.js');
  //console.log(privateKeys);

  const mnemonic = 'garment relax intact favorite tragic hunt chapter circle energy debate kid joy';

  const wallet = new ethers.Wallet(privateKeys[0], new ethers.providers.InfuraProvider('rinkeby'));
  const contractWithSigner = new ethers.Contract(betdeexAddress, betdeexAbi, wallet);

  for await (let bet of contractWithSigner.bets) {
    console.log(bet);
  }
  //
  // const tx = await contractWithSigner.bets(0);
  //
  // console.log(Number(tx));

})();
