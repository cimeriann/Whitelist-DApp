const { ethers } = require("hardhat");

async function main(){
	const whiteListContract = await ethers.getContractFactory("Whitelist");

	//deploy smart contract with 10 as the max number of whitelisted addresses allowed
	const deployedWhiteListContract = await whiteListContract.deploy(10);

	await deployedWhiteListContract.deployed();

	console.log("Whitelist Contract Address: ", deployedWhiteListContract.address);
}
main().catch((error) => {
  	console.error(error);
	process.exitCode = 1;
});
