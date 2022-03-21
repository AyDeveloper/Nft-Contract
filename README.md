# Nft Contract

This project focus on deploying an Nft to a testnet (rinkeby). During the process, generated a CID of the image and metadata of the Nft using IPFS.
The project comes with a NFT contract, a deploy script that deploys that contract, and an action scripts that mints the Nft

Try running some of the following tasks:

```shell
npx hardhat compile
npx hardhat run scripts/deploy.ts --network rinkeby
npx hardhat run scripts/action.ts --network rinkeby
```



