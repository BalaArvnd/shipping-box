import React, { useState } from "react";
import { postData, fetchData } from "../../utils";
import "./style.css";

const multipliers = {
  Sweden: 7.35,
  China: 11.53,
  Brazil: 15.63,
  Australia: 50.09,
};
export default function ShippingForm() {
  const [receiverName, setReceiverName] = useState("");
  const [weight, setweight] = useState("");
  const [colour, setColour] = useState("");
  const [destination, setDestination] = useState("");
  const [error, setError] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!colour || !destination) {
      setError("All the fields are mandatory");
      return;
    }
    const boxInfo = {
      receiver: receiverName,
      weight,
      colour,
      destination,
      cost: weight * multipliers[destination],
    };
    const boxes = fetchData("boxes") || [];
    console.log(boxes, "boxes");
    postData("boxes", [boxInfo, ...boxes]);
    alert("Saved successfully");
    setReceiverName("");
    setweight("");
    setColour("");
    setDestination("");
    setError("");
  };

  return (
    <div className="form">
      <h1>Shipping form</h1>
      <p>{error}</p>
      <form onSubmit={handleOnSubmit}>
        <div className="field">
          <label className="label">Receiver name</label>
          <input
            name="name"
            type="text"
            required
            value={receiverName}
            onChange={(e) => {
              setReceiverName(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label className="label">Box weight</label>
          <input
            name="weight"
            type="number"
            required
            value={weight}
            onChange={(e) => {
              setweight(e.target.value);
            }}
            min={0}
          />
        </div>
        <div className="field">
          <label className="label">Box colour</label>
          <input
            name="colour"
            type="color"
            required
            value={colour}
            onChange={(e) => {
              setColour(e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label className="label">Destination</label>
          <select
            className="field"
            name="destination"
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            required
          >
            <option>Select</option>
            {Object.keys(multipliers).map((m) => {
              return (
                <option key={m} value={m}>
                  {m}
                </option>
              );
            })}
          </select>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}
