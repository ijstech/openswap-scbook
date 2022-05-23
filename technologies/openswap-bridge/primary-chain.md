# Primary Chain

Open Interchain Protocol is designed to be easily extendable by simply replicating the smart contracts on new EVM compatible chains. However, there are certain functionalities that only need to be done once (i.e. the registration of a Bridge Troll), thus, the concept of a Primary Chain is established.

A specific blockchain will be selected as the Primary Chain, meaning that for certain features, that chain’s smart contracts will behave as the master, and the other secondary chains will serve as replicates. This feature mainly applies to Bridge Troll registry, and Bridge Troll qualification stakes. During the initial feature rollout, the primary chain will be defined as the Binance Smart Chain, however - this can be transitioned as the bridge community deems fit.
