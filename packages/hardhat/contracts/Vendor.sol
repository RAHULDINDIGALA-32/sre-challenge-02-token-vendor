pragma solidity 0.8.20; //Do not change the solidity version as it negatively impacts submission grading
// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/access/Ownable.sol";
import "./YourToken.sol";

contract Vendor is Ownable{
    /* State variables */
    YourToken public yourToken;
    uint256 public constant tokensPerEth = 100;

    /* Events */
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);

    constructor(address tokenAddress) Ownable(msg.sender) {
        yourToken = YourToken(tokenAddress);
    }

    // ToDo: create a payable buyTokens() function:
    function buyTokens() public payable {
        require(msg.value > 0, "Send ETH to buysome tokens");
        uint256 amountToBuy = msg.value * tokensPerEth;
        uint256 vendorBalance = yourToken.balanceOf(address(this));
        require(vendorBalance >= amountToBuy, "Vendor insufficient tokens");
        bool success = yourToken.transfer(msg.sender, amountToBuy);
        require(success, "Token transfer failed");
        emit BuyTokens(msg.sender, msg.value, amountToBuy);
    }

    // ToDo: create a withdraw() function that lets the owner withdraw ETH
    function withdraw() public onlyOwner {
        uint256 vendorEthBalance = address(this).balance;
        (bool success, ) = msg.sender.call{value: vendorEthBalance}("");
        require(success, "Withdraw failed");
    }

    // ToDo: create a sellTokens(uint256 _amount) function:
}
