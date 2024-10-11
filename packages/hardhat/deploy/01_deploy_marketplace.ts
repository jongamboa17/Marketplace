import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Deploys a contract named "Marketplace" using the deployer account.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployMarketplace: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("MarketplaceNFT", {
    from: deployer,
    args: [], // Add constructor arguments here if needed
    log: true,
    autoMine: true,
  });

  // Get the deployed contract to interact with it after deploying.
  const marketplaceContract = await hre.ethers.getContract<Contract>("MarketplaceNFT", deployer);
  console.log("MarketplaceNFT contract deployed at:", marketplaceContract.address);
};

export default deployMarketplace;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployMarketplace.tags = ["MarketplaceNFT"];
