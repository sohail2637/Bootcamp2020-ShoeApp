import React from "react";
import "../App.css";
import { datashoe } from "../data";
import { Link, useParams } from "react-router-dom";

export const Descraption = () => {
  const { id } = useParams();

  console.log("this is route parem", id);
  return (
    <div className="cardcontainer">
      {id == 0
        ? datashoe.map((item) => {
            return (
              <>
                <div className="card">
                  <h1 style={{ color: "#36c2c7" }}>Detail Descraption</h1>

                  <div style={{ width: "90%", margin: "auto" }}>
                    <img
                      src={item.Image}
                      style={{
                        with: "300px",
                        height: "300px",
                        background: "#ddd",
                      }}
                    />
                    <h4>RS: &nbsp;&nbsp;{item.price}</h4>
                    <h3 style={{ color: "#000" }}>{item.status}</h3>
                    <p style={{ color: "#474342" }}>{item.des}</p>
                  </div>
                </div>
              </>
            );
          })
        : datashoe
            .filter((item) => item.id == id)
            .map((item) => {
              return (
                <div className="card">
                  <div style={{ width: "90%", margin: "auto" }}>
                    <img
                      src={item.Image}
                      style={{
                        with: "300px",
                        height: "300px",
                        background: "#ddd",
                      }}
                    />
                    <h4>RS: &nbsp;&nbsp;{item.price}</h4>
                    <h3 style={{ color: "#000" }}>{item.status}</h3>
                    <p style={{ color: "#474342" }}>{item.des}</p>
                  </div>
                </div>
              );
            })}
    </div>
  );
};
