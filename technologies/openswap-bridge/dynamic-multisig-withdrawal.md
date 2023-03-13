# Dynamic Multisig Withdrawal

Funds in bridge vaults are released based on a dynamic multisig arrangement whereby the following sets of rules needs to be satisfied before funds will be released:

* The cumulative bond of the Mean Bridge Trolls that signed the transaction must exceed the value of the withdrawal transaction
* The minimum number of Green Bridge Trolls (as dictated by the Bridge Governance configuration) has validated the transaction
* All of the signers are active Bridge Trolls and in good standing

Any malicious transactions created or signed will result in the Mean Bridge Troll being prohibited from signing further transactions and the bond being frozen.  The bond may be slashed to cover any loss due to the malicious transaction.

