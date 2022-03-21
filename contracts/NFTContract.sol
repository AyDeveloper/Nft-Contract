// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract GambitNft is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor()  ERC721("Forte", "FTE") {}

    function mint(address _to, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        super._mint(_to, newItemId);
        super._setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function totalSupply() public pure returns(uint256) {
        return 1000;
    }

    // the super keyword helps us call a function in the inherited contract of
    // the inherited contract;

    //ipfs url https://ipfs.io/ipfs/
    // call mint
    // call bal
    // call 
}