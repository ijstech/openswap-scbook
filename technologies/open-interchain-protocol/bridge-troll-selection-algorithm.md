# Bridge Troll Selection Algorithm

The Bridge Troll selection process is based on the two concepts:

#### **Fuzzy Round Robin**

Instead of enforcing a strict round-robin selection of Bridge Trolls for signing and transaction creator, a rule stating that a Mean troll must have a gap of at least X transactions before they can be transaction creators again serves as a fuzzy round-robin that provides flexibility for unavailable Bridge Trolls. (i.e. if the total number of Mean trolls was 10, this X could be set to 8 to enforce a type of fuzzy round-robin).

#### **Lead Troll Election**

Every cycle the Mean Trolls will carry out an internal election to identify a new Lead Troll. Each blockchain will have its own Lead Troll and it is possible for a Mean Troll to be simultaneously elected as a Lead Troll on multiple chains. Only Bridge Trolls available during the election will be able to be elected, and the Lead Troll has the responsibility of monitoring other chains for new transactions involving the chain that the Lead Troll is carrying the lead responsibilities for.
