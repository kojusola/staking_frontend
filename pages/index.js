/** @jsxImportSource @compiled/react */

import Link from "next/link";
import Table from "../components/top_section";
import Chart from "../components/bottom_section";

export default function Home() {
  return (
    <div
      css={{
        fontFamily: "Montserrat",
        width: "100%",
        padding: "44px 30px",
        backgroundColor: "rgba(29, 30, 48, 1)",
      }}
    >
      <Link
        href="/"
        css={{ fontSize: "28px", lineHeight: "38px", color: "#1D1E30" }}
      >
        Stako
      </Link>

      <button> Connect Wallet </button>

      <Table/>
      <Chart/>

    </div>
  );
}
