import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";
import SendAda from "../components/TxActions/SendAda";
import LockFundsWDatum from "../components/TxActions/LockFunds";
import LockMint from "../components/TxActions/LockFundsMintNFTFT";
import RedeemLocked from "../components/TxActions/RedeemLockedFunds";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mesh App on Cardano</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        />
        <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        />
      </Head>

      <main className="main">
        <h1 className="title">
        🪄 <a href="https://meshjs.dev/">Plutus </a>Wizards 🔮
        </h1>

        <div className="demo">
          <CardanoWallet />
        </div>

        <div className="grid">

        <div className="card">
        <SendAda/>
        </div>

        <div className="card">
          <LockFundsWDatum/>
        </div>

        <div className="card">
          <RedeemLocked/>
        </div>

        <div className="card">
          <LockMint/>
        </div>

        </div>

      </main>

      {/* <footer className="footer">
        <MeshBadge dark={true} />
      </footer> */}
    </div>
  );
}
