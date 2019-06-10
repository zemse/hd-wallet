// jshint esversion:8
/*
This package is intended to create a object prototype that will have the following functionalities on initialision:
1. Unlock a keystore with password and return master private key.
2. To get privateKey0, privateKey1, privateKey2, privateKey3. These private keys can therefore be used with web3 or ethers to sign transactions.
*/
const bip39 = require('bip39');
const hdkey = require('hdkey');
const ethers = require('ethers');
// const generateMnemonic = strength => console.log(strength, bip39.generateMnemonic(strength).split(' ').length);
// for (let i = 128; i <= 512; i = i + 32) generateMnemonic(i);
// strength vs number of mnemonic words
// 128 12
// 160 15
// 192 18
// 224 21
// 256 24

const strength = 192;
const mnemonic = bip39.generateMnemonic(strength);

const getMasterPrivateKeyFromMnemonic = async(mnemonic) => {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  //console.log('Seed:',seed.toString('hex'));

  const root = hdkey.fromMasterSeed(seed); // Has a class of HDKey
  const masterPrivateKey = root.privateKey.toString('hex');
  //console.log('Master Private Key:', masterPrivateKey);

  return masterPrivateKey;
};

const getPrivateKeyAtIndexFromMaster = async(masterPrivateKey, i)=>{
  //need root node here.
  const root = hdkey.fromExtendedKey(masterPrivateKey);

  const addressNode = root.derive(`m/44'/60'/0'/0/${i}`);
  //console.log('Address Node', addressNode);
  const privateKey = addressNode._privateKey.toString('hex');
  //const privateKey = '2d3edea1b2c0f8a399350985be554ecfd568f7009636d610a8e271973c17b27e';
  //console.log(privateKey);

  return privateKey;
};

(async()=>{
  const masterPrivateKey = await getMasterPrivateKeyFromMnemonic(mnemonic);
  console.log(masterPrivateKey);
  // const firstPrivateKey = await getPrivateKeyAtIndexFromMaster(Base58.decode(masterPrivateKey), 0);
  // console.log(firstPrivateKey);
})();



// const generateKeystoreFilename = function (address) {
//   let filename = "UTC--" + new Date().toISOString() + "--" + address;
//
//   // Windows does not permit ":" in filenames, replace all with "-"
//   if (process.platform === "win32") filename = filename.split(":").join("-");
//
//   return filename;
// };
//
// const recover = function (password, keyObject, cb) {
//   var keyObjectCrypto, iv, salt, ciphertext, algo, self = this;
//   keyObjectCrypto = keyObject.Crypto || keyObject.crypto;
//
//   // verify that message authentication codes match, then decrypt
//   function verifyAndDecrypt(derivedKey, salt, iv, ciphertext, algo) {
//     var key;
//     if (self.getMAC(derivedKey, ciphertext) !== keyObjectCrypto.mac) {
//       throw new Error("message authentication code mismatch");
//     }
//     if (keyObject.version === "1") {
//       key = keccak256(derivedKey.slice(0, 16)).slice(0, 16);
//     } else {
//       key = derivedKey.slice(0, 16);
//     }
//     return self.decrypt(ciphertext, key, iv, algo);
//   }
//
//   iv = this.str2buf(keyObjectCrypto.cipherparams.iv);
//   salt = this.str2buf(keyObjectCrypto.kdfparams.salt);
//   ciphertext = this.str2buf(keyObjectCrypto.ciphertext);
//   algo = keyObjectCrypto.cipher;
//
//   if (keyObjectCrypto.kdf === "pbkdf2" && keyObjectCrypto.kdfparams.prf !== "hmac-sha256") {
//     throw new Error("PBKDF2 only supported with HMAC-SHA256");
//   }
//
//   // derive secret key from password
//   if (!isFunction(cb)) {
//     return verifyAndDecrypt(this.deriveKey(password, salt, keyObjectCrypto), salt, iv, ciphertext, algo);
//   }
//   this.deriveKey(password, salt, keyObjectCrypto, function (derivedKey) {
//     try {
//       cb(verifyAndDecrypt(derivedKey, salt, iv, ciphertext, algo));
//     } catch (exc) {
//       cb(exc);
//     }
//   });
// };
