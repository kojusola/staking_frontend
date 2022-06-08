/** @jsxImportSource @compiled/react */
import React from "react";
import NavBar from "../components/nav_bar";
import Table from "../components/top_section";

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
      <NavBar />
      <Table buttonColor="#BA3432" />
    </div>
  );
}
