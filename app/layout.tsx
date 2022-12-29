import Web3ModalProvider from "./web3-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
