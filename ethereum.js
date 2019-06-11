const bip39 = require('bip39');
const ethereum = require('ethereumjs-wallet');
const hdkey = require('ethereumjs-wallet/hdkey');

const strength = 192;
//const mnemonic = bip39.generateMnemonic(strength);
const mnemonic = 'garment relax intact favorite tragic hunt chapter circle energy debate kid joy';

module.exports = (async()=>{
  const seed = await bip39.mnemonicToSeed(mnemonic); //Buffer
  const hdWallet = hdkey.fromMasterSeed(seed); // this hd wallet has to be called with .getWallet() to convert in normal

  const privateExtendedKey = hdWallet.privateExtendedKey(); // this is the key to be given to user for saving safely
  const hdWalletSame = hdkey.fromExtendedKey(privateExtendedKey); // this hd wallet has to be called with .getWallet() to convert in normal

  const privateKeys = [
    hdWallet.derivePath("m/44'/60'/0'/0/0")._hdkey._privateKey,
    hdWallet.derivePath("m/44'/60'/0'/0/1")._hdkey._privateKey,
    hdWallet.derivePath("m/44'/60'/0'/0/2")._hdkey._privateKey
  ];

  const accounts = [
    ethereum.fromPrivateKey(privateKeys[0]).getAddress().toString('hex'),
    ethereum.fromPrivateKey(privateKeys[1]).getAddress().toString('hex'),
    ethereum.fromPrivateKey(privateKeys[2]).getAddress().toString('hex')
  ];

  console.log(accounts); // getting the same lists of accounts as in metamask

  // const keystore = hdWallet.toV3('yes');

  // // keystore of individual accounts
  // const keystoreOfFirstAcc = ethereum.fromPrivateKey(privateKeys[0]).toV3('yes');
  // console.log(keystore);
  //
  // const walletFirst = ethereum.fromV3(keystore, 'yes');
  // console.log(walletFirst);
  // console.log('hdWallet from hdkey library',hdWallet);
  // const hdWalletInstance = hdWallet.getWallet();
  // console.log('\nhdWallet instance', hdWalletInstance);

  // const keystoreMain = hdWalletInstance.toV3('yes');
  // console.log(keystoreMain);


  // const WalletSubprovider = require('ethereumjs-wallet/provider-engine');
  // console.log(new WalletSubprovider(hdWalletInstance));
  return privateKeys;
})();
