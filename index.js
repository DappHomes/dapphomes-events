'use strict'

import { Web3 } from 'web3'
import DappHomesABI from './abi/DappHomes.js'

class DappHomesEvents {
    constructor(_options) {
        const self = this

        self.options = _options
        self.abi = new DappHomesABI().DappHomesABI
        
        self.web3 = new Web3(
            self.options.provider
        )
        self.contract = new this.web3.eth.Contract(
            self.abi, self.options.contractAddress
        )
    }

    /**
     * Get list of marketplaces owned by a given user
     * @param {*} user address to get owned marketplaces
     * @returns list of owned marketplaces
     */
    async getOwnedMarketplacesBy(user) {
        const self = this

        let ownedMarketplaces = []

        // get past contract events and filter
        // by indexed field user
        const filtered = await self.contract.getPastEvents(
            self.options.eventName,
            {
                fromBlock: self.options.initialBlock,
                toBlock: self.options.toBlock,
                filter: {
                    owner: user
                }
            }
        )

        filtered.forEach(item => {
            ownedMarketplaces.push(
                item.returnValues['1']
            )
        })

        return ownedMarketplaces
    }
}

export default DappHomesEvents
