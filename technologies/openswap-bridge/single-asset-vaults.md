# Bridge Troll Selection Algorithm

The Open Interchain Protocol utilizes Single Asset Vaults to provide the liquidity for bridging functions. These are vault smart contracts that exist on blockchains that are supported by OpenSwap. They enable liquidity providers the opportunity to put their digital assets to work without having to worry about impermanent loss. These vaults will be considered as 1:1 representatives of the bridge tokens on the different chains.

![](.scbook/assets/technologies/openswap-bridge/single-asset-vault-1.jpg)

The “Lock and Release” mechanism will be managed by a network of Bridge Trolls to validate the transactions by confirming the tokens are deposited into the vault on the source chain and then releasing the tokens from the vault on the target chain.

![](.scbook/assets/technologies/openswap-bridge/single-asset-vault-2.jpg)