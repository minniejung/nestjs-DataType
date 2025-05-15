// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract DataType {
    address public wallet = 0x0000000000000000000000000000000000000000;
    address public recipient;

    uint256 public positiveNumber = 100;
    int256 public negativeNumber = -50;
    bool public isActive = true;
    bytes32 public fixedData = "0xabcdef123456";
    bytes public dynamicData;

    enum State {
        Created,
        Active,
        Inactive
    }

    State public currentState = State.Active;

    constructor(address _recipient) {
        recipient = _recipient;
    }

    function setPositiveNumber(uint256 _num) public {
        positiveNumber = _num;
    }

    function setNegativeNumber(int256 _num) public {
        negativeNumber = _num;
    }

    function toggleActive() public {
        isActive = !isActive;
    }

    function setWallet(address _address) public {
        wallet = payable(_address);
        recipient = _address;
    }

    function setFixedData(bytes32 _data) public {
        require(_data.length <= 32, "Data too long");
        fixedData = _data;
    }

    function setState(State _state) public {
        require(uint(_state) <= 2, "Invalid state");
        currentState = _state;
    }

    function setDynamicData(bytes memory _data) public {
        dynamicData = _data;
    }

    function getDynamicDataLength() public view returns (uint256) {
        return dynamicData.length;
    }

    function getDetails()
        public
        view
        returns (
            uint256,
            int256,
            bool,
            address,
            address,
            bytes32,
            bytes memory,
            State
        )
    {
        return (
            positiveNumber,
            negativeNumber,
            isActive,
            wallet,
            recipient,
            fixedData,
            dynamicData,
            currentState
        );
    }
}
