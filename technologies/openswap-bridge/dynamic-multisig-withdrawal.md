# Dynamic Multisig Withdrawal

Funds in bridge vaults are released based on a dynamic multisig arrangement whereby the following sets of rules needs to be satisfied before funds will be released:

* The cumulative bond of the Mean Trolls that signed the transaction must exceed the value of the withdrawal transaction
* All of the signers are active Bridge Trolls and in good standing
* The number of Green Troll signers based on transaction size of signers. A set formula will define the number of Green Trolls that also need to sign as transaction sizes increase.

Any malicious transactions created or signed will result in the loss of bonded OSWAP from the participating Bridge Trolls, and be immediately disqualified.
