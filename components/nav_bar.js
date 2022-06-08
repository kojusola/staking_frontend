/** @jsxImportSource @compiled/react */

import React from "react";
import { useRouter } from "next/router";

// function LoginLayout() {

//     let navigate = useNavigate();
//     const routeChange = () =>{
//       let path = `../pages/index.js`;
//       navigate(path);
//     }

const NavBar = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div>
      <p5
        css={{
          fontSize: "18px",
          color: "#4E2DC8",
          marginRight: "80%",
          padding: "2%",
        }}
      >
        {" "}
        Stako
      </p5>
      <button className="connect" onClick={handleClick}>
        Connect Wallet
      </button>
    </div>
  );
};

export default NavBar;
