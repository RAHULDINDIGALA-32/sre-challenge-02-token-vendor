# 🤖 SRE Challenge 02 — Token Vendor (ERC-20 Buy & Sell)

A full-stack Web3 project built as part of **SpeedRunEthereum Challenge 02**.

This challenge introduces core ERC-20 token mechanics, decentralized token vending, the `approve → transferFrom` pattern, and ETH↔Token swap logic.  
Users can buy tokens using ETH, sell tokens back to the vendor, transfer tokens, and explore contract interactions — all through a polished Web3 interface.

---

## 🚀 Live Demo

**Frontend (Vercel):** https://sre-challenge-02-token-vendor-nextj.vercel.app/

**YourToken (Sepolia):** `0xD9B6C909c2333F77B195e3812b26e5Ec0be6C063`  

**Vendor Contract (Sepolia):** `0xD1FE2cE313f798cD62e385AbbC0c96d85f9BBA3E`  

**Block Explorer:**  
https://sepolia.etherscan.io/address/0xD1FE2cE313f798cD62e385AbbC0c96d85f9BBA3E

---

## 🧱 Tech Stack

### 🖥 Smart Contracts
- Solidity (v0.8.x)  
- Hardhat  
- ERC-20 Standard (`YourToken.sol`)  
- Vendor Contract (`Vendor.sol`)  
- Sepolia Testnet  

### 🎨 Frontend
- Next.js 13 (App Router)  
- React + TypeScript  
- TailwindCSS  
- Wagmi + Viem  
- RainbowKit  
- Scaffold-ETH 2 Components  

---

## 🎯 Features

### 🔹 YourToken (`YourToken.sol`)
- Standard ERC-20 token  
- Minted to deployer  
- Configurable token name + symbol  
- Used as the asset for vendor buy/sell  

---

### 🔹 Vendor Contract (`Vendor.sol`)
Implements a decentralized ERC-20 vending mechanism:

#### 🟢 Buy Tokens
Users send ETH → receive tokens.  
Rate: **100 tokens per 1 ETH** (configurable).

Formula: tokensToBuy = msg.value * tokensPerEth

#### 🔄 Sell Tokens
- Users approve Vendor to pull tokens  
- Vendor pays ETH back  
- Protects against underpayment/over-withdrawal  
- Implements full ERC-20 allowance flow  

#### 📤 Transfer Tokens
- Supports normal ERC-20 transfers  
- Can be done in the dApp or via Etherscan  

---

### 🔹 Frontend dApp
- Wallet connection (RainbowKit)  
- Buy tokens with ETH  
- Approve Vendor contract  
- Sell tokens back  
- Transfer tokens to any wallet  
- Real-time balances  
- Wagmi + Viem contract calls  
- Built-in **Scaffold-ETH 2** tooling:
  - Debug Contracts panel  
  - Local block explorer  

---

## 📐 Learning Outcomes

By completing this challenge, I have learned:

- How ERC-20 tokens work internally  
- How allowances and the `approve → transferFrom` flow work  
- Safe ETH ↔ Token conversions  
- How decentralized vending markets work  
- How to read/write ERC-20 balances in a UI  
- How Scaffold-ETH 2 accelerates full-stack Ethereum development  

---

## 🎓 Part of SpeedRunEthereum

This project is part of:

🏃 **SpeedRunEthereum — Challenge 02: Token Vendor**  
https://speedrunethereum.com/challenge/token-vendor  

Built using **Scaffold-ETH 2**, a modern Ethereum development stack.
