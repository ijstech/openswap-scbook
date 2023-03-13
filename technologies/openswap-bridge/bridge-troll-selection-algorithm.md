# Bridge Troll Selection Algorithm

The Bridge Troll selection process is based on the two concepts:

#### **Fuzzy Round Robin**

Instead of enforcing a strict round-robin selection of Bridge Trolls for signing and transaction creator, a rule stating that a Mean Bridge Troll must have a gap of at least X transactions before they can be transaction creators again serves as a fuzzy round-robin that provides flexibility for unavailable Bridge Trolls. (i.e. if the total number of Mean trolls was 10, this X could be set to 8 to enforce the fuzzy round-robin selection).

#### **Lead Bridge Troll Election**

The leader of the trolls is selected randomly within the troll network upon startup. If the current leader is offline or unreachable, the troll network will randomly elect a new leader.

The role of the Lead Bridge troll is to coordinate the signing and validation process. It monitors all chains for incoming transactions where a vault withdrawal is required. When it detects a new bridge order request, it will begin the selection process to assign the Mean Bridge Troll signers and Green Bridge Troll validators for the transaction; adhering to the fuzzy round robin selection rules, bond coverage, and minimum Green Bridge Troll validators.

