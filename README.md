# blockchain_project
This is the readme file.

1. Created Openzep_erc20.sol file
    Copied the Openzep_erc20 contract from https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
    Inserted 'Import "./IERC20.sol";'
    Inserted 'import "./extensions/IERC20Metadata.sol";'
    Inserted 'import "../../utils/Context.sol";'
    Deployed the ERC20 contract with 1 million tokens with Name 'TOKEN MCTOKEN FACE RVProject-v1.0' and symbol 'TMTFRVPRJ'
    Compiled the code in remix and deployed it to Ropsten test network.
    Verified the source code.

2. Updated .env file with Infura token, contract address, owner address and super secret private key.

3. Created wallet.js to get wallet details, installed the package and ran using below command.
    ```npm install ethereumjs-wallet```
    ```npm install bip39```
   ``` npm install keccak256```
    $node wallet.js

4. Created package.json to remember the deps.

5. Created contract.js to interaction with our smart contract and to read values from it, also created transactions to write to it.
    ```npm install web3```
    ```npm install dotenv```
    ```npm install ethereumjs-tx```
    $node contract.js

6. Created accounts.js to list number for address.

7. Created distribute.js to perform below:
    read in a file of accounts
    count the number of accounts
    get the remaining supply belonging to token owner
    divide 5% of remaining supply between the accounts
    collect tea and medals

    ```npm install fs```
    ```npm install big-number```
    $node distribute.js

8. Running Docker container
    Built the docker image
    ```docker build -t blockchain-projects .```
    Checked images running
    ``` $docker image ls ```
    Tagged the image
    ```docker tag blockchain-projects:latest devsecopstutorials/blockchain-projects:latest```
    Push an image
    ```$ docker push devsecopstutorials/blockchain-projects:latest```
    checked what docker containers are running
    ```$docker ps```

9. Created docker-compose.yml file
    ```docker-compose up```
    To remove all docker images/networks
    ```docker system prune -a -f``

10. Renamed the Docker Hub image to 'blockchain-projects:x21120501_ravina_mestry_blockchain_project'
    ```docker tag blockchain-projects:latest devsecopstutorials/blockchain-projects:x21120501_ravina_mestry_blockchain_project```
    ```docker push devsecopstutorials/blockchain-projects:x21120501_ravina_mestry_blockchain_project```