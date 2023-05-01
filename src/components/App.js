import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);


  useEffect( () => {
    fetch("http://localhost:3001/toys")
    .then(r => r.json())
    .then( json => setToys(json))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleFormSubmit (addedToy) {
    setToys([...toys, addedToy]);
  };

  function handleDeleteItem (deletedItem) {
    const updatedToys = toys.filter( toy => toy.id !== deletedItem.id);
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={handleFormSubmit} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteItem={handleDeleteItem} />
    </>
  );
}

export default App;
