# Liquidity Queue

#### Who audited the contracts for the liquidity queue technology?

OpenSwap’s initial set of smart contracts have been audited by CertiK and our secure adaptors are also audited and running under the “CertiK Shield” program. In addition, the smart contracts have also been successfully peer-reviewed by seasoned industry experts. As new features and contracts are added, we will continue to ensure that audits are carried out.

#### **For Spot Price Queue, are all Oracles from Chainlink?**

OpenSwap’s secure adaptors (SAs) can connect with any oracle provider. Our initial set of secure adaptors will pull pricing data from ChainLink; however, new (SAs) can be created and as long as they pass a security audit and receive a security score, they will be eligible for the community to vote them into place.

#### **How can front-running be prevented on the Spot Price Queue?**

Circuit breakers within the SAs will focus on preventing front-running. A key approach OpenSwap will initially use, is to do a check that the oracle price is within a certain threshold of a secondary pricing source that will be more real-time (i.e. Pricing from a leading DEX or CEX). In events of sharp market rises or drops, trades will not be consummated.

#### **How can I know how much OSWAP I need to stake to obtain priority on Priority Queue?**

When creating a queue order on the OpenSwap DApp, you will be provided information on your queue position based on the # of OSWAP that you propose to stake into the order.

#### Can other projects use the Secure Adaptors?

Yes. The secure adaptors are part of a larger framework called the secure adaptor protocol which provides a structured way to package up oracles into a safe building block for DeFi projects.

#### Can other projects access the OpenSwap liquidity queue?

Yes, it is possible. For security reasons, only whitelisted contracts will be able to interact with the liquidity queues.  The whitelisting is managed through community governance, so any project can stake OSWAP and propose to add themselves into the whitelist.

#### How does the liquidity queue concept compare to order books?

Order books by their nature facilitate price discovery through bid and ask orders and the exchange uses order matching technology to consummate trades. In the case of our Spot-Priced Liquidity queues, they behave more like a decentralized OTC desk. The Spot-Priced queues do not do price discovery and rely on a secure adaptor mechanism that uses either oracle provided spot prices or market-maker-defined offers to enable trades. In the case of pegged queues and group queues, it can be said that they can be considered a ‘flat priced’ order book. In the case of Offer-Priced queues, the ‘offers’ have a resemblance to order books, but the matching mechanism more resembles an OTC RFQ process.

#### Can Priority Queue be visualized as FIFO OTC order books?

Yes, this is a way to look at it. Essentially, market makers are providing their liquidity to be sold at the current market price but it may take some time for the trade to occur based on the demand from the taker-side and position on the queue.

#### Can I “mine” liquidity queues by participating on both sides of the queue to earn transaction fees?

Yes, it is possible and in fact, our protocol allows liquidity providers to have their trade proceeds enter into the opposite queue so that the provider’s liquidity can cycle back & forth between the 2 sides of a pair’s queues with the primary goal of earning transaction fees. Our platform supports this, but it is up to the risk tolerance of the liquidity provider whether they want to use this feature as it may result in impermanent loss.

#### What happens to Spot Price Queues when there is extreme volatility in the market?

For all the ‘spot market’ queues, the secure adaptors are expected to have circuit breakers in place to stop trades when the Oracle price goes beyond a certain threshold of other reference prices (i.e. price found on pancake swap or other real-time references). Our initial secure adaptors will all have these circuit breakers in place and thus in times of pricing volatility, queue-based trades will likely be offline until the market pricing settles down. Note that this will not apply to ‘pegged queues’ as those queues will always operate as long as tokens are available in the queue. Likewise, ‘offer priced’ queues will depend on the offer prices.

#### What utilities does the OSWAP token have with respect to the liquidity queue technology?

OSWAP tokens can be staked to gain priority on the spot-priced queues. More importantly, OSWAP tokens need to be staked to propose and add new queues and secure adaptors to the platform. It is envisioned that user communities will design their own queues to fit their needs both in terms of logic and in terms of tokens supported, and thus will require OSWAP tokens to onboard the queues.
