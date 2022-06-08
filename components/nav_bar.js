/** @jsxImportSource @compiled/react */

import React from "react";

// function LoginLayout() {
  
//     let navigate = useNavigate(); 
//     const routeChange = () =>{ 
//       let path = `../pages/index.js`; 
//       navigate(path);
//     }
    

const NavBar = () => {
    return (
        <div>
           <p5 css={{ fontSize: "18px", color: "#4E2DC8", marginRight: "80%", padding: "2%"}}> Stako</p5>
           <button className="connect">Connect Wallet</button>
        </div>

    );
};

export default NavBar;