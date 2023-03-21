# How Does Open Interchain Protocol Work

![](.scbook/assets/technologies/openswap-bridge/open-interchain-protocol.jpeg)

1. Liquidity providers populate the bridge vaults on supported chains to receive a portion of bridge fees.

2. The user can then create an order on the source chain with the OpenSwap Dapp.  At this stage, the order is written on-chain to the order contract.

3. The lead Mean Bridge Troll will be monitoring the order contracts from each blockchain.  This leader will detect the new order and proceed to package and broadcast the order as follows:

    a. Assigning a transaction executer by selecting a Mean Bridge Troll based on the fuzzy round robin algorithm (1 of 3)

    b. Assigning additional Mean Bridge Trolls to sign (based on bond coverage of transaction size) (1 of 3)

    c. Assigning Green Bridge Trolls to validate and sign the transaction (1 of 5)
    
    d. Broadcasting the order to the message channel

4. Assigned Green Bridge Trolls listening to the message channel will proceed to carry out their activities of validating the transaction and signing it. 

5. Assigned Mean Bridge Troll transaction Creator will create order with the signatures and do a check that the expected execution price on the target AMM pools/queues are still within the tolerance set in the order.  If ok, then submit final trx to target chain smart contract for withdrawal and also the subsequent hybrid router action.

6. Bridge vault contract will verify that signatures and bonds of signing super trolls exceed trx value of withdrawal and other conditions of the multisig algorithm are met before releasing funds to the hybrid router.

7. The user will then receive the token on the target chain.

