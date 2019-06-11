module.exports = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_betAmountInExaEs",
				"type": "uint256"
			}
		],
		"name": "addAmountToBet",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_manager",
				"type": "address"
			}
		],
		"name": "addManager",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			},
			{
				"name": "_betTokensInExaEs",
				"type": "uint256"
			}
		],
		"name": "collectBettorTokens",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_description",
				"type": "string"
			},
			{
				"name": "_category",
				"type": "uint8"
			},
			{
				"name": "_subCategory",
				"type": "uint8"
			},
			{
				"name": "_minimumBet",
				"type": "uint256"
			},
			{
				"name": "_pricePercent",
				"type": "uint256"
			}
		],
		"name": "createBet",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_ender",
				"type": "address"
			},
			{
				"name": "_result",
				"type": "uint8"
			},
			{
				"name": "_gasFee",
				"type": "uint256"
			}
		],
		"name": "emitEndEvent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_manager",
				"type": "address"
			}
		],
		"name": "removeManager",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_tokensInExaEs",
				"type": "uint256"
			}
		],
		"name": "sendTokensToAddress",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_esTokenContractAddress",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_deployer",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_contractAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_category",
				"type": "uint8"
			},
			{
				"indexed": true,
				"name": "_subCategory",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "_description",
				"type": "string"
			}
		],
		"name": "NewBetContract",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_ender",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_contractAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "_result",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "_prizePool",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "_gasFee",
				"type": "uint256"
			}
		],
		"name": "EndBetContract",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "betBalanceInExaEs",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "bets",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_from",
				"type": "address"
			}
		],
		"name": "getBettorBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumberOfBets",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "isManager",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "superManager",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
