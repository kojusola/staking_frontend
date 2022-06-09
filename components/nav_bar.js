/** @jsxImportSource @compiled/react */

import React from "react";
import { useRouter } from "next/router";

// function LoginLayout() {

//     let navigate = useNavigate();
//     const routeChange = () =>{
//       let path = `../pages/index.js`;
//       navigate(path);
//     }

const NavBar = ({buttonConnect, buttonText, availableConnect}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div css={{display: "flex"}}>
      <p5
        css={{
          fontSize: "18px",
          color: "#4E2DC8",
          marginRight: "68.5%",
          marginLeft: "2%"
        }}
      >
        {" "}
        Stako
      </p5>
      <p5 className="avaialable" 
      css={{ backgroundColor: `${availableConnect}`, color: "#fff", marginRight:"70px"}}>
        {" "}
        Available Amount
        <br />
        <span id="amount" css={{color: "#00C7BA", marginLeft: "25%"}}> $5500 </span> 
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
