/* @flow */
import { date, random } from "faker";
import React from "react";
import "../src/css/style.css";
import App from "../src/index.jsx";

export default {
  title: "Content",
  component: App,
};

export const _App = () => (
  <App
    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => ({
      name: random.word(),
      point: random.number({ max: 999 }),
      time: `${new Intl.DateTimeFormat("en-US").format(date.past())}`,
    }))}
  />
);
