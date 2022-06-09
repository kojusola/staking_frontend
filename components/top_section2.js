/** @jsxImportSource @compiled/react */

import React from "react";

const Table = ({ buttonColor, buttonCol }) => {
  return (
    <div css={{ marginTop: "2rem" }}>
      <p6
        css={{
          fontSize: "16px",
          lineHeight: "25px",
          color: "#FFF",
          padding: "2%",
        }}
      >
        {" "}
        All stake
      </p6>
      <div
        css={{
          background: "rgba(0, 0, 0, 0.22)",
          margin: "2%",
          padding: "2%",
        }}
      >
        <table css={{ fontSize: "18px", lineHeight: "40px", color: "#8C8A8A" }}>
          <thead css={{ color: "rgba(140, 138, 138, 1)" }}>
            <tr>
              <th css={{ paddingRight: "15em" }}>Name</th>
              <th css={{ paddingRight: "15rem" }}>Days Invested</th>
              <th css={{ paddingRight: "20rem" }}>Amount Yield</th>
              <th css={{ paddingRight: "0rem" }}> </th>
            </tr>
          </thead>
          <tbody css={{ fontSize: "16px", color: "#fff", margin: "2%" }}>
            <tr>
              <td>Stake One</td>
              <td> 10 days </td>
              <td> $10 </td>
              <td>
              {" "}
                <button
                  className="connect"
                  css={{ backgroundColor: `${buttonColor}`, border: "none", width: "150px", height: "45px", marginBottom: "13px", color: "#fff"}}
                >
                  Unstake
                </button>{" "}
              </td>
            </tr>

            <tr>
              <td>Stake Two</td>
              <td> 10 days </td>
              <td> $10 </td>
              <td>
                {" "}
                <button
                  className="connect"
                  css={{ backgroundColor: `${buttonColor}`, border: "none", width: "150px", height: "45px", marginBottom: "13px", color: "#fff"}}
                >
                  Unstake
                </button>{" "}
              </td>
            </tr>

            <tr>
              <td>Stake Three</td>
              <td> - </td>
              <td> - </td>
              <td>
              {" "}
                <button
                  className="connect"
                  css={{ backgroundColor: `${buttonCol}`, border: "none", width: "150px", height: "45px", color: "#fff"}}
                >
                  Stake
                </button>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
