require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain evil hope knee borrow test'; 
let testAccounts = [
"0xe31222665be3ee649a117d7a28303a4d13a549fbd0be582c82fa7334008814f2",
"0x21ae6663dcae4be4e390d2a0934e75312a52dc0399b373bd8f3beabec9738872",
"0x493eb781b880da7a24bec07d441f1a48f3f296bf6a45e342e5337793aa3a0760",
"0x5f869e8301b8af5b70897f8ff14114b1cab33692fd2b5ea39545e6304eefe026",
"0xfca554c2b69dfc89599a968f1f7f158c1820290e264e97cbc382b1f566a6a339",
"0x6ac8434cc5b7291dd8dd83fb28aafbfbe94a8071908e4d32d0a50aff0ca49337",
"0x7c9a74ae030479241237f961ad1765bdb4f1285f402453f7c27420b6aa6bf098",
"0x0bd6f4dd140d795d92be7deedce42a56fac7f566acb3db75ba561b6cf29534ab",
"0xba2079a0ce5c14a8c5c474878d86809ba0623539a2c4eda0fe3fdafc355d167a",
"0xfa32a911ded608524b9151b33ed257db0b875a7fbd106d6fc65f7279986935cb"
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
            version: '^0.8.0'
        }
    }
};

