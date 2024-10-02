import { useState } from "react";
import { useEffect } from "react";
import { Banner } from "../../components/Banner";
import { RoomOrder } from "../../components/RoomOrder";
import { Rooms } from "../../components/Rooms";
import { Footer } from "../../components/Footer";
import "./style.css";
import RoomData from "../../rooms";

export const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const selectedRoomData = RoomData.find((room) => {
    return room.name === selectedRoom;
  });

  return (
    <>
      <Banner />
      <Rooms onSelect={setSelectedRoom} roomList={RoomData} />
      {selectedRoomData && <RoomOrder selectedRoomData={selectedRoomData} />}
      <Footer />
    </>
  );
};
