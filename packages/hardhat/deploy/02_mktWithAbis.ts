import { DeployFunction } from "hardhat-deploy/types";

/**
 * This script is tagged with "mktwithabis" and can be run using the tag.
 */
const mktWithAbis: DeployFunction = async function () {
  // Your deployment logic here
  console.log("Running marketplace deployment and abi generation script...");
  // You can call other functions or perform actions specific to this deployment
};

export default mktWithAbis;

// Tag this script with "mktwithabis"
mktWithAbis.tags = ["mktwithabis"];
