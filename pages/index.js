/** @jsxImportSource @compiled/react */
import React from "react";
import NavBar from "../components/nav_bar";
import Table from "../components/top_section2";
import Chart from "../components/bottom_section";
import { useRouter } from "next/router";

export default function Home() {
  const [connected, setConnected] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (!connected) {
      router.push("/register");
    }
  }, []);
  return (
    <div
      css={{
        fontFamily: "Montserrat",
        width: "100%",
        padding: "44px 30px",
        backgroundColor: "rgba(29, 30, 48, 1)",
      }}
    >
      <NavBar buttonText="Disconnect Wallet" availableConnect />
      <Table buttonColor="#BA3432" buttonCol="#00C7BA" />
      <Chart />
    </div>
  );
}
