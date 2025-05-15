import { ethers } from "hardhat";
import { makeAbi } from "./abiGenerator";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  // Todo: 배포하기 위한 script를 만들어주세요.
  const recipient = deployer.address;

  const DataType = await ethers.getContractFactory("DataType");
  const contract = await DataType.deploy(recipient);
  await contract.waitForDeployment();

  console.log(`DataType contract deployed at: ${contract.target}`);

  await makeAbi(`DataType`, contract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
