import React, { useEffect, useState } from "react";
import { fetchData } from "../../utils/index";
import "./style.css";

export default function BoxList() {
  const [boxList, setBoxList] = useState([]);
  useEffect(() => {
    const boxes = fetchData("boxes");
    setBoxList(boxes);
  }, []);

  return (
    <div className="table">
      <h1>List of boxes</h1>
      {boxList?.length ? (
        <table>
          <tr>
            <th>Sl.no</th>
            <th>Receiver</th>
            <th>Box Weight (kg)</th>
            <th>Box Color</th>
            <th>Country</th>
            <th>Cost (INR)</th>
          </tr>

          {boxList?.map((b, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{b.receiver}</td>
                <td>{b.weight}</td>
                <td>
                  <div
                    className="colored-box"
                    style={{
                      backgroundColor: b.colour,
                    }}
                  ></div>
                </td>
                <td>{b.destination}</td>
                <td>{b.cost.toFixed(2)}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        <h3>No data found! Please create a box to view.</h3>
      )}
    </div>
  );
}
