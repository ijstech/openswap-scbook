# The Transaction Fee Model

To sustain the operations of the Open Interchain Protocol and to provide incentives for bridge vault single assets staking, a comprehensive fee structure is implemented. 

* Liquidity Provider Fee

    For every transaction on the interchain protocol, 0.1% would be given to the LP provider on the target chain bridge vault. This is an incentive for the LP provider to stake more tokens into the bridge vault to support transaction volumes.

* Cross Chain Protocol Fee

    The protocol fee is 0.1% and it will be distributed to the troll validators and NFT owners to reward their contribution on supporting a secure interchain swap.

* Chain Base Fee

    The base fee varies among different chains as it is aimed to support the transaction fee on the target chains. The initial base fee is set to 0 and will be covered by the OpenSwap team to encourage more usage.
    
* Balancer Fee

    The balancer fee is introduced to balance the vaults among different chains. It is an important process to avoid all assets flowing into a single chain. This is also initially set as 0 as the OpenSwap team will be responsible for balancing the vaults.

From the user perspective, the total bridge fee will be 0.2%. For example, transferring 100 OSWAP from BSC to AVAX would cost you 0.2 OSWAP, therefore, you will only receive 99.8 OSWAP on AVAX.
