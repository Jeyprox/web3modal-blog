"use client";

import { mainnet, configureChains, createClient, WagmiConfig } from "wagmi";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

const chains = [mainnet];

// Wagmi client
const { provider } = configureChains(chains, [
  walletConnectProvider({
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  }),
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function Web3ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>
      <Web3Modal
        projectId={process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
}
