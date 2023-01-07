const { expect } = require("chai");
const { ethers } = require("hardhat");
require("dotenv").config();

describe("WhiteList", async () => {
  let deployer;
  let whitelistContract;
  let maxNumber = 20;
  let WhiteList;
  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    WhiteList = await ethers.getContractFactory("Whitelist");
    whitelistContract = await WhiteList.deploy(maxNumber);
    console.log("contract deployed at: " + whitelistContract.address);
  });
  afterEach(async () => {
    deployer = null;
    whitelistContract = null;
  });

  describe("constructor", async () => {
    it("should set max number of allowed whitelisted contracts", async () => {
      let _maxWhitelistedAddresses = 20;
      const whitelistContract = await WhiteList.deploy(
        _maxWhitelistedAddresses
      );
      let res = await whitelistContract.getMaxNumberOfWhitelistedAddresses();
      console.log("deployed at: " + whitelistContract.address);
      expect(res).to.equal(_maxWhitelistedAddresses);
    });
  });
  describe("contract functions", async () => {
    it("should add an address to whitelist and also fail with correct response", async () => {
      address = ethers.getSigners();
      whitelistContract.addAddressToWhitelist();
      let _numberOfWhitelistedAddress = 1;
      let res = await whitelistContract.getNumAddressesWhitelisted();
      expect(_numberOfWhitelistedAddress).to.equal(res);
    });
  });
});
