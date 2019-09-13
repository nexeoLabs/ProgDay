pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract nxprogday is ERC20 {
  string public name = "nxProgDay Coin";
  string public symbol = "pgC";
  uint256 public decimals = 18;

  constructor() public {
    _mint(msg.sender, 100 * 10**6 * 10**decimals);

  }
}
