require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind hospital good clock bubble surge'; 
let testAccounts = [
"0xdd1061082b15ed109f608009b14815fd7592f22ecda6aabc12737ba001708e61",
"0xf23276f5f02f5fec376ef4c95e13c79c0dec43b22c1996d7a2b94de2eef8153c",
"0xefa06bb28cd0a4e169f901db53987d6edc5e55001cbcab9518ef31c061b31b02",
"0x6fdc3b5245632885ed90fb08a5dd97e6bbe346406308db86f8b20cf556c0eaa3",
"0xdd11f3eae963d41387c143ec7d9a730f6e85961eb089bed1db212db382cb0d0f",
"0xb806305edb2cc4e3070fc67736d16a787f14e96a43af914c2cff01f010a4bf31",
"0xaae900fd198bb4c41e0081eaa0359a6f10371fbef30a76d8f018dadf2009de70",
"0x0fe2c2bb1be9aa9719dd882dcc757fc250626669c6642cbf20085a9c6701635e",
"0x8ebe8c1b172545daa74cbc7a3ac04b02864c1195a19592eb6c67896dd7a0f87a",
"0x0d711d72aba78838947cac4f230fb5da6097251fab4b9b927efc854f18382be1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
