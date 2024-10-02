import React from "react";
import "./style.css";
import { OneRoom } from "../OneRoom";

export const Rooms = ({ roomList, onSelect }) => {
  return (
    <>
      <section className="dark">
        <div className="container">
          <h2>Naše pokoje</h2>
          <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
          <div className="cards-row">
            {roomList.map((room) => (
              <OneRoom
                img={room.img}
                name={room.name}
                price={room.price}
                key={room.name}
                onSelect={onSelect}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
