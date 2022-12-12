import React from "react";
import icon_check from "../assets/images/icon-check.svg";
import icon_cross from "../assets/images/icon-cross.svg";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";
export default function ListElement({
  listItem,
  deleteListItem,
  addCompleted,
  completed,
}) {
  const [hovered, setHovered] = useState(false);
  const [done, setDone] = useState(false);
  function checkItem(e) {
    setDone(true);
    addCompleted(e);
  }

  useEffect(() => {
    if (completed.some((item) => item === listItem)) setDone(true);
  }, []);
  return (
    <div>
      <li
        className="list-item "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={`circle ${done ? "done" : ""}`} onClick={checkItem}>
          {done && <img src={icon_check} className="icon-check" />}
        </div>
        {listItem}
        {hovered && <img src={icon_cross} onClick={deleteListItem} />}
      </li>
    </div>
  );
}
