require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "Alchemy-api",
      accounts: [
        "Rinkeby_private_key",
      ],
    },
  },
};
