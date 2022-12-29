"use client";

import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useDisconnect, useBalance } from "wagmi";

export default function Home() {
  const { address } = useAccount();
  const { data, isLoading } = useBalance({ address });
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  return (
    <main className="absolute inset-0 grid place-content-center">
      <div className="space-y-3 rounded-3xl bg-gray-800 px-8 py-6 shadow-xl">
        <h1 className="font-mono text-3xl font-bold">Wallet Connect</h1>
        {address ? (
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="space-y-0.5">
                <h2>your address</h2>
                <p className="rounded bg-gradient-to-tr from-indigo-500 to-violet-700 px-2 py-1">
                  {address}
                </p>
              </div>
              <div className="space-y-0.5">
                <h2>your balance</h2>
                <p className="rounded bg-gradient-to-tl from-indigo-500 to-violet-700 px-2 py-1">
                  {isLoading
                    ? "loading..."
                    : `${data?.formatted} ${data?.symbol}`}
                </p>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <button
                type="button"
                className="rounded-lg border-2 border-red-500 px-3 py-1.5 transition-colors hover:bg-gray-600/25"
                onClick={() => disconnect()}
              >
                disconnect
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => open()}
            className="w-full rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-700 px-4 py-2 text-center"
          >
            connect wallet
          </button>
        )}
      </div>
    </main>
  );
}
