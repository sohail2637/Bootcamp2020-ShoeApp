import React from "react";
import "../App.css";
import { upcomingshoe } from "../data";

export const UpComing = () => {
  return (
    <div className="cardcontainer">
      {upcomingshoe.map((item,index) => {
        return (
          <div className="card" key={index} >
            <div style={{ width: "90%", margin: "auto" }}>
              {/* <Link to="/descraption"> */}
                <img
                  src={item.Image}
                  style={{ with: "300px", height: "300px" }}
                />
              {/* </Link> */}
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
