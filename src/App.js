import React from "react";
import "./styles.css";

import Card from "./components/Card";

import cardArray from "./data";

export default function App() {
  const cards = cardArray.map((card) => <Card {...card} key={card.title} />);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">{cards}</section>
    </div>
  );
}
