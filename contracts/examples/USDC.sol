// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../token/oft/v2/OFTV2.sol";

contract USDC is OFTV2 {
    constructor(address _layerZeroEndpoint, uint _initialSupply, uint8 _sharedDecimals) OFTV2("USDC", "USDC", _sharedDecimals, _layerZeroEndpoint) {
        _mint(_msgSender(), _initialSupply);
    }
}
