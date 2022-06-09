/** @jsxImportSource @compiled/react */

import React from "react";
import { useRouter } from "next/router";

// function LoginLayout() {

//     let navigate = useNavigate();
//     const routeChange = () =>{
//       let path = `../pages/index.js`;
//       navigate(path);
//     }

const NavBar = ({buttonConnect, buttonText}) => {
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
          marginRight: "78%",
          padding: "2%",
        }}
      >
        {" "}
        Stako
      </p5>
      {" "}
      <button className="connect"
      css={{ backgroundColor: `${buttonConnect}`, borderColor: "#00C7BA", color: "#fff", width: "150px", height: "45px", backgroundColor: "transparent" }}
       onClick={handleClick}>
        {buttonText}
      </button>{" "}
    </div>
  );
};

export default NavBar;
