const getAddressDetails = require('./urlfetch.js');

const bip39 = require('bip39');
const hdkey = require('hdkey');

var createHash = require('create-hash');
var btcLib = require('bitcoinjs-lib');
var bs58check = require('bs58check');

//const mnemonic = bip39.generateMnemonic(); //generates string
const mnemonic = "gentle mutual speak consider mandate kingdom cash explain soul exile cabin squeeze";
console.log();

(async()=>{
  const seed = await bip39.mnemonicToSeed(mnemonic); //creates seed buffer
  console.log('Seed: ' + seed.toString('hex'));
  console.log('mnemonic: ' + mnemonic);

  const root = hdkey.fromMasterSeed(seed);
  const masterPrivateKey = root.privateKey.toString('hex');
  console.log('masterPrivateKey: ' + masterPrivateKey);
  for(let i = 0; i < 10; i++) {
    const addrnode = root.derive("m/44'/0'/0'/0/"+i);
    //console.log('addrnodePublicKey: '+ addrnode._publicKey)

    const step1 = addrnode._publicKey;
    const step2 = createHash('sha256').update(step1).digest();
    const step3 = createHash('rmd160').update(step2).digest();

    var step4 = Buffer.allocUnsafe(21);
    step4.writeUInt8(0x00, 0);
    step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
    const step9 = bs58check.encode(step4);
    //console.log(`Address${i}: ${step9}`);
    const addressDetails = await getAddressDetails(step9);
    console.log(`\n${addressDetails.data.address}\nBalance: ${addressDetails.data.balance}\tTx-count: ${addressDetails.data.tx_count}`);
  }
  console.log();

})();
