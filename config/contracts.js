module.exports = {
  // default applies to all environments
  default: {
    // Blockchain node to deploy the contracts
    deployment: {
      host: "localhost", // Host of the blockchain node
      port: 8545, // Port of the blockchain node
      type: "rpc" // Type of connection (ws or rpc),
      // Accounts to use instead of the default account to populate your wallet
      // The order here corresponds to the order of `web3.eth.getAccounts`, so the first one is the `defaultAccount`
      ,accounts: [
        {
            privateKey: "0xd899158230d36f3f3ed0402d7c2cf85fe05c622cff13cbba9ebbd02ba7c246c5",
            mnemonic:  "art process illegal labor traffic follow cloud brand knee gorilla stool inject",
            balance: "5 ether"  // You can set the balance of the account in the dev environment
            // Balances are in Wei, but you can specify the unit with its name

        },
       /* {
          privateKeyFile: "path/to/file", // Either a keystore or a list of keys, separated by , or ;
          password: "passwordForTheKeystore" // Needed to decrypt the keystore file
        },
        */
        {
            mnemonic:  "art process illegal labor traffic follow cloud brand knee gorilla stool inject",
        // addressIndex: "0", // Optional. The index to start getting the address
        //  numAddresses: "1", // Optional. The number of addresses to get
         // hdpath: "m/44'/60'/0'/0/" // Optional. HD derivation path
        },


        {
             "nodeAccounts": true // Uses the Ethereum node's accounts
        },



          // secondary account
/*
          {
               privateKey: "9b610e0381673851beac6b461d4351fc3c31f790a2273809791be1c5cb87a56c",
               mnemonic:  "impose invest scan cake release doctor source teach expand put gown online" ,
            balance: "5 ether"  // You can set the balance of the account in the dev environment
            // Balances are in Wei, but you can specify the unit with its name

        },


        {
          mnemonic:  "impose invest scan cake release doctor source teach expand put gown online" ,
        // addressIndex: "0", // Optional. The index to start getting the address
        //  numAddresses: "1", // Optional. The number of addresses to get
         // hdpath: "m/44'/60'/0'/0/" // Optional. HD derivation path
        },

  */
        {
             "nodeAccounts": true // Uses the Ethereum node's accounts
        } 


      ]
    },
    // order of connections the dapp should connect to
    dappConnection: [
      "$WEB3",  // uses pre existing web3 object if available (e.g in Mist)
      "ws://localhost:8545",
      "http://localhost:8545"
    ],

    // Automatically call `ethereum.enable` if true.
    // If false, the following code must run before sending any transaction: `await EmbarkJS.enableEthereum();`
    // Default value is true.
    // dappAutoEnable: true,

    gas: "auto",

    // Strategy for the deployment of the contracts:
    // - implicit will try to deploy all the contracts located inside the contracts directory
    //            or the directory configured for the location of the contracts. This is default one
    //            when not specified
    // - explicit will only attempt to deploy the contracts that are explicitly specified inside the
    //            contracts section.
    //strategy: 'implicit',

      contracts: {
      // example:
      //SimpleStorage: {
      //  args: [ 100 ]
          //}
/*
          nxprogday: {
              from: "0x1BC4F0Bb456D207fB8441eDe3b1328692b9bc710",
              onDeploy: ["nxprogday.methods.transfer('0x1BC4F0Bb456D207fB8441eDe3b1328692b9bc710',1).send()"],
              gas: 195253,
              gasPrice: 0.001 



          },

          */
    }
  },

  // default environment, merges with the settings in default
  // assumed to be the intended environment by `embark run`
  development: {
    dappConnection: [
      "ws://localhost:8545",
      "http://localhost:8545",
      "$WEB3"  // uses pre existing web3 object if available (e.g in Mist)
    ]
  },

  // merges with the settings in default
  // used with "embark run privatenet"
  privatenet: {
  },

  // merges with the settings in default
  // used with "embark run testnet"
  testnet: {
  },

  // merges with the settings in default
  // used with "embark run livenet"
  livenet: {
  },

  // you can name an environment with specific settings and then specify with
  // "embark run custom_name" or "embark blockchain custom_name"
  //custom_name: {
  //}
};
