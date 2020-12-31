import { EXPLORER_URL, NETWORKS } from "../constants";
import { fromAscii, fromWei, toAscii, toChecksumAddress, toHex, toWei } from 'web3-utils';

/**
 * @function shortenAddress
 *
 * @param {String} address - Full ETH address
 * @param {Number} charsStart - Letters from start
 * @param {Number} charsEnd - Letters from end
 * @return {String} - Shortened address, ex: 0xAbC...XyZ
 */
export const shortenAddress = (address, charsStart = 3, charsEnd = 3) => {
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

/**
 * @function numberWithCommas
 *
 * @param {number | string} num - Numeric value
 * @return {string} - Return number in position format
 */
export const numberWithCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * @function formatNumber
 *
 * @param {number|string} n - Number to be formatted
 * @param {number} d - Number to decimals to be parsed and displayed
 * @return {number} - Formatted number to be displayed on the UI
 */
export function formatNumber(n, d = 3) {
  return parseFloat(Number(n).toFixed(d))
}

/**
 * @function getEthFromWei
 *
 * @param {string} wei - Wei value to be converted
 * @param {string} unit - Unit of input value provided
 * @return {string} - Return ETH value
 */
export const getEthFromWei = (wei, unit = 'ether') => fromWei(wei, unit);

/**
 * @function getWeiFromEth
 *
 * @param {string} eth - ETH value to be converted
 * @param {string} unit - Unit of input value provided
 * @return {string} - Return Wei value
 */
export const getWeiFromEth = (eth, unit = 'ether') => toWei(eth, unit);

/**
 * @function getChecksumAddress
 *
 * @param {string} address - ETH address
 * @return {string} - Return checksummed address
 */
export const getChecksumAddress = (address) => toChecksumAddress(address);