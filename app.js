const { ethers } = require("ethers");
const abi = require('./abi.json');


const providerUrl = "https://eth-mainnet.g.alchemy.com/v2/mIBQulZCQqI3QIENGBV5bqSFtaf8sJSQ";

const contractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

const getSomething = () => {
    const provider = new ethers.providers.JsonRpcProvider(providerUrl);
    const tokenContract = new ethers.Contract(contractAddress, abi, provider);

    const tokenName = tokenContract.name().then(data => console.log(data));

}

getSomething();

