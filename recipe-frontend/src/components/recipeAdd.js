import React, { useState } from "react";
import axios from "axios";

function AddRecipe({ update, setUpdate }) {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      picture,
      title,
      recipe
    };

    axios.post("http://localhost:3000/recipes", newRecipe).then(() => {
      setUpdate(!update);
      setPicture("");
      setTitle("");
      setRecipe("");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Recipe</h2>
      <label>
        Picture:
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          required
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Recipe:
        <textarea
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipe