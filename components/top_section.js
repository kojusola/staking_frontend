/** @jsxImportSource @compiled/react */

import React from "react";

const Table = () => {
    return (
        <div className="">
            <table  css={{ fontSize: "20px", lineHeight: "38px", color: "#8C8A8A", margin: "5%" }}>
                <thead className="text-[background: rgba(196, 196, 196, 1)]">
                    <tr>
                        <th>Name</th>
                        <th>Days Invested</th>
                        <th>Amount Yield</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody css={{ fontSize: "16px", color: "#fff", }}>
                    <tr>
                        <td>Stake One</td>
                        <td> - </td>
                        <td> - </td>
                        <td> <button className="connect">Connect Wallet</button> </td>
                    </tr>

                    <tr>
                        <td>Stake Two</td>
                        <td> - </td>
                        <td> - </td>
                        <td> <button className="connect">Connect Wallet</button> </td>
                    </tr>

                    <tr>
                        <td>Stake Three</td>
                        <td> - </td>
                        <td> - </td>
                        <td> <button className="connect">Connect Wallet</button> </td>
                    </tr>

                </tbody>
            </table>
        </div>

    );
};

export default Table;