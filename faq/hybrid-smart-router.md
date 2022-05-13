# Hybrid Smart Router

#### **What happens if liquidity queues are empty?**

In a scenario where the liquidity queues are empty, the hybrid smart router will simply involve only AMM pools to carry out a swap. This would only be the case if no liquidity queues are available or if the liquidity queues are insufficiently funded.

#### Which chains and DEXs are supported?

OpenSwap has initially launched on Binance Smart Chain (BSC) supporting PancakeSwap, Biswap, Impossible Swap, and BakerySwap. OpenSwap will soon integrate to Avalanche, and will support Trader Joe, Pangolin, and SushiSwap. As the project continues to develop, we envision to also extend to other EVM compatible blockchains such as Polygon and Fantom.

#### Is the Hybrid Smart Router audited?

The initial set of hybrid smart router associated smart contracts were audited by Peckshield. As with other OpenSwap smart contracts, further improvements made to our smart contracts will continuously be audited by reputable 3rd party security auditors and peer reviewers before they are released to the mainnet.

#### Will the Hybrid Smart Router use more gas than current routing approaches?

If the hybrid smart router uses a hybrid multi-hop path involving the usage of liquidity queue and AMM pool, it is expected that due to the more efficient queue hop, the overall gas required would be lower than if a multi-hop AMM swap was conducted. In the event of an AMM pool-only approach, user can expect that gas fees would be comparable industry standards.

#### Can other DEXs create their own Hybrid Smart Router to tap into OpenSwap’s liquidity queues?

Yes, it is possible. For security reasons, only whitelisted contracts will be able to interact with our liquidity queue smart contracts. The whitelisting is managed through community governance, so any project who wishes to create their own hybrid smart router to tap into OpenSwap’s liquidity queues, they can do so by staking OSWAP in our governance portal and propose to add themselves into the whitelist.

#### Will there be a scenario where a multi-hop swap using liquidity queues and AMM pool results in only part of the swap taking place?

It is not possible. The swaps will be all or nothing.
