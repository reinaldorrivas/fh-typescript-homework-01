import { homeworkApp } from "./homework/homeworkApp";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /* html */ `
  <div>
    <h1>Homework 01</h1>
  </div>
`;

homeworkApp();
