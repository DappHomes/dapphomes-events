# dapphomes-events

DappHomes events processing library.

## env variables

| Name | Description |
|---|---|
| WEB3_PROVIDER | HTTPS RPC endpoint defaults to [Amoy](https://rpc-amoy.polygon.technology) |
| WEB3_CONTRACT_ADDRESS | Contracts address to read events from |
| WEB3_INITIAL_BLOCK | Initial block to read from (recommended contrat deployed block number to minimise await time) |
| WEB3_TO_BLOCK | Final block to read from |
| WEB3_EVENT_NAME | Event to listen to |
| WEB3_TEST_ADDRESS | Testing purpose address |
