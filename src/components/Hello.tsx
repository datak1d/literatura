import React from "react";
import s from "./Hello.module.css"

const Hello = ({ name }) => <span className={`${s.background}`}>Hello, {name}!</span>;

export default Hello;