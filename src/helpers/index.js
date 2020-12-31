import { EXPLORER_URL, NETWORKS } from "../constants";

/**
 * @function shortenAddress
 *
 * @param {String} address - Full ETH address
 * @param {Number} charsStart - Letters from start
 * @param {Number} charsEnd - Letters from end
 * @return {String} - Shortened address, ex: 0xAbCd...XyZ
 */
export const shortenAddress = (address, charsStart = 4, charsEnd = 3) => {
  return `${address.substring(0, charsStart + 2)}...${address.substring(
    address.length - charsEnd,
    address.length,
  )}`
}

/**
 * @function getNetworkName
 *
 * @param {Number} networkId - Network ID
 * @return {String} - Network name
 */
export const getNetworkName = (networkId) => {
  switch (networkId) {
    case 1:
      return NETWORKS['MAINNET']
    case 3:
      return NETWORKS['ROPSTEN']
    case 4:
      return NETWORKS['RINKEBY']
    case 5:
      return NETWORKS['GOERLI']
    case 42:
      return NETWORKS['KOVAN']
    default:
      return null
  }
}

/**
 * @function getNetworkExplorer
 *
 * @dev By default it returns URL of the Mainnet.
 * @param {Number} networkId - Network ID
 * @return {String} - Network explorer URL
 */
export const getNetworkExplorer = (networkId = 1) => {
  switch (networkId) {
    case 1:
      return EXPLORER_URL['MAINNET']
    case 3:
      return EXPLORER_URL['ROPSTEN']
    case 4:
      return EXPLORER_URL['RINKEBY']
    case 5:
      return EXPLORER_URL['GOERLI']
    case 42:
      return EXPLORER_URL['KOVAN']
    default:
      return null
  }
}