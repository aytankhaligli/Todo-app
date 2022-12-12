import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import icon_check from "../assets/images/icon-check.svg";
import icon_cross from "../assets/images/icon-cross.svg";
import ListElement from "./ListElement";
import { nanoid } from "nanoid";
export default function Main() {
  const stroge =
    localStorage.list === "" ? [] : localStorage.getItem("list").split(",");
  const activeStroge =
    localStorage.active === "" ? [] : localStorage.getItem("active").split(",");
  const completedStroge =
    localStorage.completed === ""
      ? []
      : localStorage.getItem("completed").split(",");

  const [list, setList] = useState(stroge);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState(completedStroge);
  const [active, setActive] = useState(activeStroge);
  const [filterView, setFilterView] = useState(list);
  // console.log(list);
  // console.log(localStorage);
  useEffect(() => {
    setFilterView(list);
    localStorage.setItem("active", active);
    localStorage.setItem("completed", completed);
  }, [list, completed]);
  function handleChange(e) {
    setInput(e.target.value);
  }

  function createListItem(e) {
    e.preventDefault();
    setList((prev) => [input, ...prev]);
    setActive((prev) => [input, ...prev]);
    setInput("");
  }
  function deleteListItem(e) {
    setList((prev) =>
      prev.filter((item) => item !== e.target.parentElement.innerText)
    );
    setCompleted((prev) =>
      prev.filter((item) => item !== e.target.parentElement.innerText)
    );
    setActive((prev) =>
      prev.filter((item) => item !== e.target.parentElement.innerText)
    );
  }
  function addCompleted(e) {
    setCompleted((prev) => [...prev, e.target.parentElement.innerText]);
    setActive((prev) =>
      prev.filter((item) => item !== e.target.parentElement.innerText)
    );
  }
  function clearCompleted() {
    setCompleted([]);
    setList(active);
  }

  // console.log(list);
  // console.log(completed);
  // console.log(active);
  // console.log(localStorage);
  localStorage.setItem("list", list);
  const listElement = filterView.map((listItem, index) => (
    <ListElement
      key={listItem}
      listItem={listItem}
      list={list}
      deleteListItem={deleteListItem}
      addCompleted={addCompleted}
      completed={completed}
    />
  ));

  return (
    <div>
      <form className="input-field" onSubmit={(e) => createListItem(e, input)}>
        <input
          type="text"
          placeholder="Currently typing"
          value={input}
          onChange={handleChange}
        />
        <div className="circle"></div>
      </form>
      <ul className="list">
        {listElement}
        <li className="list-item list-end">
          <p>{active.length} items left</p>
          <div className="li-middle-part">
            <p
              className={
                filterView.toString() === list.toString() ? "active" : ""
              }
              onClick={() => {
                setFilterView(list);
              }}
            >
              All
            </p>
            <p
              className={
                filterView.toString() === active.toString() ? "active" : ""
              }
              onClick={(e) => {
                setFilterView(active);
              }}
            >
              Active
            </p>
            <p
              className={
                filterView.toString() === completed.toString() ? "active" : ""
              }
              onClick={() => setFilterView(completed)}
            >
              Completed
            </p>
          </div>
          <p onClick={clearCompleted}>Clear Completed</p>
        </li>
      </ul>
    </div>
  );
}
