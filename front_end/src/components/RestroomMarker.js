import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import ControlledPopup from "./ControlledPopup";
import markerIcon from "./markerIcon.png";

function RestroomMarker({
  key,
  building_id,
  text,
  distance,
  walking_time,
  floors,
}) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div>
      <div
        style={{
          borderRadius: "50%",
          width: "25px",
          height: "25px",
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <a
          onClick={() => {
            setOpen((o) => !o);
          }}
        >
          <img
            src={markerIcon}
            style={{
              width: "80%",
            }}
          />
          {text}
        </a>
      </div>

      <ControlledPopup
        id="id"
        open={open}
        closeModal={closeModal}
        building_name={text}
        distance={distance}
        walking_time={walking_time}
        floors={floors}
      />
    </div>
  );
}

export default RestroomMarker;
