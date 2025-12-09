"use client";

import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5 max-w-4xl">
          {/* Header */}
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-xl font-bold mt-1">
              SpeedRunEthereum – Challenge 02
              <br /> 🏵 Token Vendor (ERC-20 Buy & Sell)
            </span>
          </h1>

          {/* Connected Wallet */}
          <div className="flex justify-center items-center space-x-2 flex-col mt-6">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>

          {/* Hero Section */}
          <div className="flex items-center flex-col flex-grow pt-12">
            <Image
              src="/hero.png"
              width={727}
              height={231}
              alt="challenge banner"
              className="rounded-xl border-4 border-primary"
            />

            <div className="max-w-3xl mt-10 text-lg space-y-5 text-center">
              <p>
                This challenge introduces the fundamentals of{" "}
                <strong>ERC-20 tokens</strong>, vendor-style smart contracts,
                and the <strong>approve → transferFrom</strong> pattern that
                allows contracts to move tokens on behalf of users.
              </p>

              <p>
                The <strong>Vendor</strong> contract allows users to:
                <br />
                🟢 Buy tokens using ETH  
                🔄 Sell tokens back to the vendor  
                📤 Transfer tokens to any wallet  
                And learn how contract-to-contract interactions work.
              </p>

              <p>
                You will interact with the ERC-20 contract{" "}
                <strong>YourToken.sol</strong> and the{" "}
                <strong>Vendor.sol</strong> contract deployed on Sepolia at:
              </p>

              <p className="font-semibold">
                YourToken:{" "}
                <Link
                  href="https://sepolia.etherscan.io/address/0xD9B6C909c2333F77B195e3812b26e5Ec0be6C063"
                  passHref
                  className="link"
                >
                  0xD9B6C909c2333F77B195e3812b26e5Ec0be6C063
                </Link>
                <br />
                Vendor:{" "}
                <Link
                  href="https://sepolia.etherscan.io/address/0xD1FE2cE313f798cD62e385AbbC0c96d85f9BBA3E"
                  passHref
                  className="link"
                >
                  0xD1FE2cE313f798cD62e385AbbC0c96d85f9BBA3E
                </Link>
              </p>

              <p>
                The final UI will let users seamlessly execute token purchases,
                approvals, transfers, and redemptions — all powered by{" "}
                <strong>
                  Scaffold-ETH 2, Next.js, RainbowKit, Wagmi, Viem, and
                  Hardhat.
                </strong>
              </p>

              <p>
                This challenge teaches how decentralized applications enable{" "}
                <strong>
                  permissionless value exchange without intermediaries
                </strong>{" "}
                — just smart contracts.
              </p>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grow bg-base-300 w-full mt-16 px-8 py-12 rounded-xl">
            <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
              {/* Debug */}
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <BugAntIcon className="h-8 w-8 fill-secondary" />
                <p className="mt-4">
                  Interact with the ERC-20 & Vendor smart contracts via{" "}
                  <Link href="/debug" passHref className="link">
                    Debug Contracts
                  </Link>
                  .
                </p>
              </div>

              {/* Block Explorer */}
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
                <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
                <p className="mt-4">
                  View transactions and on-chain data in the{" "}
                  <Link
                    href="https://sepolia.etherscan.io/"
                    passHref
                    className="link"
                  >
                    Block Explorer
                  </Link>{" "}
                  tab or on Etherscan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
