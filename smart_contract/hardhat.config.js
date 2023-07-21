// https://eth-goerli.g.alchemy.com/v2/JTv3L-MKy3JhYufFEoLnlR1F2emCajIJ


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/JTv3L-MKy3JhYufFEoLnlR1F2emCajIJ',
      accounts: [ 'fb41029481e6227bdbbc14a77b742eb8d5e5f309cdaf5030a672780dd5c59f3a' ]
    }
  }
}