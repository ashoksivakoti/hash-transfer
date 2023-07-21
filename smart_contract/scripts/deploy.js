const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();


  await transactions.deployed();

  console.log("Transactionsdeployed to : ",transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.erroe(error);
    process.exit(1);
  }
};

runMain();
