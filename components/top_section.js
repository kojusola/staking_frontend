/** @jsxImportSource @compiled/react */

import React from "react";

const Table = () => {
    return (
        <div css={{background: "rgba(0, 0, 0, 0.22)", margin: "2%", padding: "2%"}}>
            <table  css={{ fontSize: "20px", lineHeight: "38px", color: "#8C8A8A" }}>
                <thead css={{ color: "rgba(140, 138, 138, 1)"}}>
                    <tr>
                        <th css={{padding: "5%"}}>Name</th>
                        <th>Days Invested</th>
                        <th>Amount Yield</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody css={{ fontSize: "16px", color: "#fff", margin: "2%"}}>
                    <tr>
                        <td>Stake One</td>
                        <td> - </td>
                        <td> - </td>
                        <td><button css={{ color: "rgba(255, 255, 255, 1)"}}> Stake </button>
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

    );
};

export default Table;