'use strict'

import DappHomesEvents from '../index.js'
import dotenv from 'dotenv'

dotenv.config()

const options = {
    provider: process.env.WEB3_PROVIDER,
    contractAddress: process.env.WEB3_CONTRACT_ADDRESS,
    initialBlock: process.env.WEB3_INITIAL_BLOCK,
    toBlock: process.env.WEB3_TO_BLOCK,
    eventName: process.env.WEB3_EVENT_NAME
}

const dappHomesEvents = new DappHomesEvents(options)
const marketplacesByOwner = await dappHomesEvents.getOwnedMarketplacesBy(
    process.env.WEB3_TEST_ADDRESS
)

console.log(marketplacesByOwner)
