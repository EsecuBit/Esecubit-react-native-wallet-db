// @flow
import ActionType from './ActionType'
import CoinUtil from '../utils/CoinUtil'
import { Coin } from '../common/Constants'

export function setCryptoCurrencyUnit(coinType, unit) {
  coinType = CoinUtil.getRealCoinType(coinType)
  let actionType = ''
  switch (coinType) {
    case Coin.btc:
      actionType = ActionType.SET_BTC_UNIT
      break
    case Coin.eth:
      actionType = ActionType.SET_ETH_UNIT
      break
    case Coin.eos:
      actionType = ActionType.SET_EOS_UNIT
      break
    default:
      break
  }
  return {
    type: actionType,
    unit: unit
  }
}

export function setLegalCurrencyUnit(unit) {
  return {
    type: ActionType.SET_LEGAL_CURRENCY_UNIT,
    unit: unit
  }
}

export function setScanAddress(unit) {
  return {
    type: ActionType.SET_SCAN_ADDRESS,
    unit: unit
  }
}

export function setSupportedCoinTypes(coinTypes) {
  return {
    type: ActionType.SET_SUPPORTED_COIN_TYPES,
    coinTypes: coinTypes
  }
}

export function setWalletName(name) {
  return {
    type: ActionType.SET_WALLET_NAME,
    walletName: name
  }
}
