module.exports = async function main(callback) {
    try {
        const Box = artifacts.require('Box');
        const box = await Box.deployed();
      // Our code will go here
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
  
      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  };
  