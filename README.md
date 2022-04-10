# blockchain_project
This is the readme file.

1. Created Openzep_erc20.sol file and 
    Copied the Openzep_erc20 contract from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
    Inserted 'Import "./IERC20.sol";'
    Inserted 'import "./extensions/IERC20Metadata.sol";'
    Inserted 'import "../../utils/Context.sol";'
    Deployed the ERC20 contract with 1 million tokens with Name 'TOKEN MCTOKEN FACE RVProject-v1.0' and symbol 'TMTFRVPRJ'
    Compiled the code in remix and deployed it to Ropsten test network.

2. Updated .env file with Infura token, contract address, owner address and spuer secret private key

3. Created wallet.js to get wallet details, installed the package and ran using below command.
    npm install ethereumjs-wallet
    npm install bip39
    npm install keccak256
    '$node wallet.js'

4. Created package.json to remember the deps.

5. Created contract.js 
    npm install web3
    npm install dotenv
