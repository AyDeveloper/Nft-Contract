/* eslint-disable prettier/prettier */
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const tokenUri = "https://ipfs.io/ipfs/QmeqfpRgzyx8J31Nz3jv2GuUzcvbSHTeSpDV5DKBhz5nyD"
  const contractAddr = "0x197684CEdabC034901770b1abe5f76C79a85fB98";
  const myAddr = "0x2792f4C16F124942886DF20f3C5B4c2cB195aEe2";
  // We get the contract to deploy
  const gambitNft = await ethers.getContractAt("GambitNft", contractAddr);
  const owner = await ethers.getSigner(myAddr);
  await gambitNft.mint(myAddr, tokenUri);
  console.log(await gambitNft.balanceOf(myAddr));
  console.log(await gambitNft.ownerOf(1));
  console.log(await gambitNft.approve("0x9ae1e982Fc9A9D799e611843CB9154410f11Fe35", 1));
  console.log(await gambitNft.getApproved(1));
  const tx = await gambitNft.connect(owner).transferFrom(myAddr, "0x9ae1e982Fc9A9D799e611843CB9154410f11Fe35", 1)
  const trx = await tx.wait();
  console.log(trx);
  console.log("done");
  
  


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
