require('dotenv').config()

const HDWalletProvider = require("@truffle/hdwallet-provider");

const rinkebeyUrl = "https://rinkeby.infura.io/v3/66b8e081633b4153b9e2600b8e607697";
const mumbaiURL = "https://matic-mumbai.chainstacklabs.com";
const mumbaiPrivatekey = process.env.MUMBAIPRIVATEKEY;
const rinkebyPrivateKey = process.env.RINKEBYPRIVATEKEY;
const polygonURL = "https://polygon-rpc.com/";
const polygonPrivateKey = process.env.POLYGONPRIVATEKEY;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(rinkebyPrivateKey, rinkebeyUrl);
      },
      gas: 4500000,
      gasPrice: 10000000000,
      network_id: '4',
    },
    mumbai: {
      provider: function () {
        return new HDWalletProvider(mumbaiPrivatekey, mumbaiURL);
      },
      gas: 4500000,
      gasPrice: 10000000000,
      network_id: '80001',
    },
    polygon: {
      provider: function () {
        return new HDWalletProvider(polygonPrivateKey, polygonURL);
      },
      gas: 4500000,
      gasPrice: 50000000000,
      network_id: '137',
    },
  },

  compilers: {
    solc: {
      version: "0.8.10"
    }
  }
};
