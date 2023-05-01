import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteItem}) {


  const renderedToys = toys.map( toy => <ToyCard toy={toy} key={toy.id} onDeleteItem={onDeleteItem}  />);

  return (
    <div id="toy-collection">{renderedToys}</div>
  );
}

export default ToyContainer;
