const { version } = require("ethers");

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc.ankr.com/polygon_amoy/";
const NEXT_PUBLIC_PRIVATE_KEY = 
"064682502d51b6d5e991803de11a212a3762b5c85b245e35af98ad85a7c85b4c";

module.exports = {
    solidity: "0.8.9",
    
    defaultNetworks: "matic",
    networks: {
        hardhat: {},
        polygon_amoy: {
            url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
            accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
            gas: 6000000,
        },
    },
};


// module.exports = {
//     solidity: {
//         version: "0.8.4",
//         Settings: {
//             optimizer: {
//                 enabled: true,
//                 runs: 1000,
//             },
//         },
//     },
//     networks: {
//         hardhat: {
//             chainId: 31337,
//         },
//     },
// };
