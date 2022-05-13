# OpenSwap Bridge Tutorial (testnet)

### Introduction

This tutorial will walk you through the steps on how to acquire tokens on the different testnet chains to be used for your trial and testing purposes. We appreciate your support during this exciting pre-alpha phase of the highly anticipated OpenSwap CrossChain Bridge as our team prepares for a release candidate for mainnet. Should you encounter any issues or bugs, please report them to us by filling out our issue reporting form below. Our team will review all reports and any issue reported that may lead us to securing the bridge even further may be eligible for rewards!



### Key Features

The OpenSwap CrossChain Bridge is powered by a network of bridge trolls (validators) to provide the following:

* Single Asset Bridge Vaults on each chain offering **impermanent loss free return**s to liquidity providers
* Users **receive native tokens** instead of synthetic ones provided by other bridge offerings. You get the token you want without the hassle of figuring out how to convert a synthetic token into the native one.
* True **any-to-any** cross chain swaps from one native token to another.
* Enable projects to leverage our network of bridge trolls to manage bridging services for multichain projects.

### **Prerequisite**

#### a. Add Testnet on MetaMask

The tesnet rollout will support Kovan, BSC Testnet and Avalanche Fuji C-Chain. Before testing on the bridge function, it is recommended to add the network to Metamask first. You may simply go to “[https://testnet.openswap.xyz/#/](https://testnet.openswap.xyz/#/)” and click the network button on the top-right corner. Select the network and it will be added to your metamask automatically.

![](https://lh3.googleusercontent.com/4CnX43McmwXTgh4hKA9pn-frwTQSkLY2x2KENoToQh2tTAHaMJF-UtF7f5y6vF5heu3tq3e3v6zDnJVOX86NoHOM5p8Qoo1TFQFk83YyN5vyTPrs2LzSGX7Huba5plyGeRH\_ztev)

#### b. Get Native Tokens on Testnet from Faucet

| **ETH**  | <p><a href="https://faucets.chain.link/https://gitter.im/kovan-testnet/faucet">https://faucets.chain.link/<br>https://gitter.im/kovan-testnet/faucet</a></p> |   |   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | - |
| **AVAX** | [https://faucet.avax-test.network/](https://faucet.avax-test.network)                                                                                         |   |   |
| **BNB**  | [https://testnet.binance.org/faucet-smart](https://testnet.binance.org/faucet-smart)                                                                          |   |   |

_We recommend getting some BNB_

#### _**c.**_** Get Testnet USDT from OSWAP**

Native token can be swapped into testnet USDT from our swap page. The Pegged Queue option will allow you to obtain testnet USDT with a small amount of native tokens.

![](https://lh3.googleusercontent.com/V6PWfG1EQlq89\_KeLltf\_47ZTeWyobElcnpItNBxj7\_RRRWWbiGGk5SWi7bJ0hb0HN0eX3HKw0I\_O\_uUQBrxJICi5pq7SVtxdYz-uQTh9PJ87JCHTVt0B1-xowiUwnBA85NR1XF4)

### **Tutorial**

#### 1. Create Swap

You may create a order on “[https://testnet.openswap.xyz/#/swap](https://testnet.openswap.xyz/#/swap)” by selecting the source chain, destination chain, input amount and the desired token on the destination chain.

![](https://lh6.googleusercontent.com/SLBe\_QiR3Bno98an6HwPF7vHRxGLOQW9rGTLDJNShNAOMZycNk7gwe4eGQzNBAz2QUnUfNmP9-9fl86RN7nmBLUzRHekv7kU2jvnXOTHypON9nBRULgSoi1NWimL-5mLN8lvU6WR)

After clicking “Create Order”, you may review the order details, such as the expected amount out on the destination chain and the transaction fee.

![](https://lh4.googleusercontent.com/359A55vXB5JMzNlBi1RUhaed\_vNOFTNO51tFOn2-Djmw2Oh-awoykdwlRkU3a84yziMKNehkzLj0X\_pXwT\_QniF3mgVViEaIepj2oSKoNkA7iSRNIMcvBeeeXNZ1\_Ozm7PFkhkOp)

You may click the view record to check the order status.

![](https://lh6.googleusercontent.com/whlgN35oIbusPPFt0P5I2mpYfgh0yNtElbYCqA\_QRAXGCgK8hHvL7G759fVDWj53rqqnCagblwrmE2GXXMn1mk4GB6fGzQ4OdKzS50tQ-J7vKLvwsMnrw4FSms8YMUhYPKeqveGh)

#### 2. View Record

Click the “Bridge” on the menu bar to access the record page.

![](https://lh3.googleusercontent.com/O9jJ31WR2v1YyAIbZjMhkKmwL0jfXglfGrUAq48soutnuof8WZ9vtbwub8qwd1rJDw59LLgZlbswLAMInUDd40UT5BQJBWjclOCrb2KL2HyeqovmikIEdJxjZTXebfwyc75c27It)

Your record will be shown as “Pending” when it is still waiting for verification on our trolls and you could verify the creation transaction on explorer.

![](https://lh4.googleusercontent.com/n6GwOfUy-OBzndop4zZkquZSkuZXsuJuny\_\_vXgmGpiLUAp1g159\_qGAXI5Bk7SoT5jC0-eB\_uqNYP7\_s1pwO2\_P-jBZbdd52m10d7K1kgQE5htyz9Hcp53vj\_-q0v3ttkzTaufb)

After the trolls have confirmed your transaction, the order status would be changed to “Executed” and you can verify it on the explorer to see how many tokens you receive.

![](https://lh4.googleusercontent.com/x3VdQeEE2piFW\_cTlMVHhFlt1xHmyuuNHbSY0ay-O7HMgO0ts\_vOxQSZeF4Df0H6csXMaF9SloDAiWGWfdU-KR8JLBQ\_mDFpPOjClvaic0D9Hl4m\_dAt5bnfaPKn6wg6pcARFrgx)

#### 3. Cancel Record

Some orders might be rejected by the Bridge Trolls due to different reasons, such as a high price change on the destination chain, or insufficient liquidity in the bridge vault. You May then cancel your order to receive the token back in stablecoins. (It might be slightly less than your original amount as the gas fee is deducted automatically.

You may first click the “Request Cancel” button

![](https://lh5.googleusercontent.com/yxXyna2ir-Www7SF665PxXRdWjnG3ZlD8FBYfb-hAG\_F3p-swQh7uSaKteCeZ0mtQr70DwmZDjqZXe3DCs0u-g5i1XQWsFZLa68HWoXL152YOXTZxB-GCzVv3e4SUbAQ7d8cslmC)

Confirm the request and you will see the order status changed to “Cancel Requested”

![](https://lh4.googleusercontent.com/o5h6dZjCuxnxIjD8Ces6h0tY9elhWR-Aj159mZ6\_7\_Sb\_cgukyiC9MjbNOn\_MARzCenfrWRKiI0-oP5NRRMSW0Aad\_a-1QfUBF0ZX9lJOzV-7iTXd63lUNjQMsgxnYdXDjnVV1eO)

![](https://lh4.googleusercontent.com/4S801D0ftazi5ubk2YO7Vg1ssNlWz1Nu4grF9YFT2MWv7nwgsyEA-SVVx8oDnMDeXWdoggqTCiH5PErWGRjaFbXhLiW98ce-tlcErefeLPke0hnnTOOqsGRgNeKrb8w96Z8N2rrR)

It will be changed to “Cancel Approved” after the trolls have confirmed it and you can withdraw the tokens from the source chain.

![](https://lh6.googleusercontent.com/qX8VjxNq\_od0zgFngOKzGzZ-3xx8J6MUqkWQIThITE1QKO\_b70bDL\_E0snKHpnuEzjeNbF2MbpN7OKTE9zIrolcI8MiYH44OdSWWaexDfkoIZ\_7iSAviKQFVzmXlIbo\_KQ\_uizMW)

![](https://lh4.googleusercontent.com/kgxyd0UpLN\_KFdhWmN0F0Q4dk2clhAZE6DrKd4kGhLqmjBA5n0JIaK8\_t\_gxkVqoxs6OrlTpm7aI6-5sntua3BKRG\_hPdXRqXg99Y0BN8OijwHTh4lzM4jZHQ54Fg7HLCszbQWxF)

![](https://lh4.googleusercontent.com/arVqsSy4png9\_k1nDzIZ5j3tbb0lkRQ3c7h1pRn0s9xgt0aEfkHWAvZB-jZXaiApV-\_l9X4cuVuMma7N\_34H-HPhp0lxPc7FA8KfETMlnYmZCHjKCA2yxYXo9nwM-5g3iMklSzap)

### On-chain Verification

#### a. Creation Transaction

You may verify the order on-chain by the explorer.

![](https://lh5.googleusercontent.com/8FKiOmBmm6s1PNs71MmJNo67oF90uL9vIn7Ar1Cz\_nNt3U-ZfFW\_zBQnVTeaByO4Whq04RMZHKBFhShADPL2klKFVM\_i4Oox\_z981EXIpyxxRl8OaT\_NnxDIctsThZTDrcZuU15u)

The first thing you could notice is that 10 USDT has been sent to our bridge vault contract.

![](https://lh4.googleusercontent.com/WLr7\_bQiYPlwshvbBUrh19o5WdJa1NFQWiXJfRHVWUgU-nfoCqzsRn6AFlUWC55ErqrfQHqjcH1uUaxqdKr5SIIdhh--EfmRiaFPLBZ1rsRXVZbMSd\_fFAKNFecEyxFxcX\_ljqLg)

#### b. **Executed Transaction**

From the Execution transaction, you may notice that only 8.97 USDT.e is used to trade on the destination chain. It is because the bridge fee is deducted from the input amount 10 USDT. The 8.97 USDT.e is then further used to swap to OSWAP which is 30.09 in the end.

![](https://lh6.googleusercontent.com/q8pfF\_eHQGa\_-K6aDhnD7r7\_MIf3zOoW8sPXZlpH9bzylY-8\_qoDF-IXtlt3cHnLkh6oAQZkhya8hrskHt9Uz1pktrtEt0ZYWLmewEQwlXDyoVJmrOjGX2l\_Lrn3VfHcdrXMHmOT)

![](https://lh4.googleusercontent.com/MGGoMfePC0Zvq-\_8vEGRQNmlJbH\_VpEkrnCYGmoCBG9AIRRxBQnRCUMuuRDgYzUmbZnQSHKC5A9sJWPZdRm-7mrLro6UvdFLKgBPqZLVM6N5t5ye-20U0y2g2GSuV80OYSQ1GZpH)

#### **c.** Canceled Transaction

From the Cancelation transaction, you may notice that only 1998.999996 USDT is returned to you given that your original amount is 2000 USDT. The difference is caused by the automatic deduction on gas fee when the trolls try to swap tokens on the destination chains.

![](https://lh4.googleusercontent.com/0wYKP\_rFPsY4dCFE4LYiKP5NtoJSlZM1DK\_IF-TEEKZOVaBMvAJemisaFOR\_QrR80KFguYgzMM4sZ6TfKT-4bgYMMA8cDvxfeRve3Sc4h05HcagbVbTYSoSWG0uRCMxecTCT-ezm)

![](https://lh6.googleusercontent.com/DTvuXlOgCzYzYD6q2s3vQUx7lhAI-lCThh7i4Cu2v0L-DmHl4fI6Gju3VeehfLTxmsIbEmyLo\_G0HKGEDJEqipMtMJwaLqHG913u2oD1PVRrxTcW77usvXbk4zrb5mlRlRryt7b7)

### **Supported Dexes**

|   | Chain                  | Dex                                                                    |
| - | ---------------------- | ---------------------------------------------------------------------- |
| 1 | BSC Testnet            | <p>OpenSwap </p><p>PancakeSwap </p><p>BakerySwap </p><p>BurgerSwap</p> |
| 2 | Kovan Testnet          | <p>OpenSwap<br>UniSwap<br>SushiSwap</p>                                |
| 3 | Avalanche FUJI C-Chain | <p>OpenSwap<br>Pangolin<br>SushiSwap</p>                               |
