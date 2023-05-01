import React, {useState} from "react";

function ToyCard({toy, onDeleteItem}) {

  const [likeCount, setLikeCount] = useState(toy.likes)

  function handleDeleteClick () {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then( () => onDeleteItem(toy));
  }

  function handleLikeClick () {
    setLikeCount(likeCount => likeCount + 1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: (likeCount + 1),
      }),
    })
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
