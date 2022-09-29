# Whitelist-DApp
This is a whitelist decentralized application for an upcoming nft collection.
Users can join the whitelist by linking metamask accounts and clicking the "Join WhiteList" button. Requires the user to be on the goerli testnet. This is part of the lessons in the Sophomore Track at learnweb3(https://learnweb3.io/)

## Project Layout
* /hardhat-config - contains the backend and the smart contracts
* /whiitelistdapp-frontend - contains the frontend with which a user might interact with 
* the smart contract

## Setup
### Backend
* Clone the repository, and `cd` into the `hardhat-config` directory and simply run `npm install`
* Next, you'll need to compile the smart contracts with `npx hardhat compile`
* Deploy the smart contract to any testnet - I used the goerli testnet as most other testnets have been deprecated
* You'll need to provide your metamask private key and an rpc node from a provider. 
* Look into `/hardhat-config/example.env` for examples

### Frontend
* The frontend was created using next.js which is a react framework
* Simply "cd" into the `whiitelistdapp-frontend` folder and install dependencies using `npm install`
* After successfully installing dependencies, open [http://localhost:3000](http://localhost:3000) with your browser to
* join interact with the dapp. Happy building! :)
