var contractABI = [];
var contractAddress = "0x4e51D102c47742342d43291BAefCA6D4a8f58b41";
var web3 = new Web3("http://localhost:9545");
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);
