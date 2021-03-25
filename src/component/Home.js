import React from "react";
import "../App.css";
import { datashoe } from "../data";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="cardcontainer">
      {datashoe.map((item,index) => {
        return (
          <div className="card" key={index}>
            <div style={{ width: "90%", margin: "auto" }}>
              <Link to={`/descraption/${item.id}`}>
                {" "}
                <img
                  src={item.Image}
                  style={{
                    with: "300px",
                    height: "300px",
                  }}
                />
              </Link>
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
