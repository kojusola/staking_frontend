/** @jsxImportSource @compiled/react */

import React from "react";

const Table = () => {
    return (
        <div> 
             <p6 css={{ fontSize: "18px", lineHeight: "50px", color: "#FFF", padding: "2%" }}> All stake</p6>
        <div css={{background: "rgba(0, 0, 0, 0.22)", margin: "2%", padding: "2%"}}>
            <table  css={{ fontSize: "18px", lineHeight: "40px", color: "#8C8A8A" }}>
                <thead css={{ color: "rgba(140, 138, 138, 1)"}}>
                    <tr>
                        <th css={{paddingRight: "12rem"}}>Name</th>
                        <th css={{paddingRight: "12rem"}}>Days Invested</th>
                        <th css={{paddingRight: "12rem",}}>Amount Yield</th>
                        <th css={{paddingRight: "12rem"}}> </th>
                    </tr>
                </thead>
                <tbody css={{ fontSize: "16px", color: "#fff", margin: "2%"}}>
                    <tr>
                        <td>Stake One</td>
                        <td> - </td>
                        <td> - </td>
                        <td><button> Stake </button>
                        </td>
                    </tr>

                    <tr>
                        <td>Stake Two</td>
                        <td> - </td>
                        <td> - </td>
                        <td > <button className="connect">Stake</button> </td>
                    </tr>

                    <tr>
                        <td>Stake Three</td>
                        <td> - </td>
                        <td> - </td>
                        <td> <button className="connect">Stake</button> </td>
                    </tr>

                </tbody>
            </table>
        </div>
        </div>

    );
};

export default Table;