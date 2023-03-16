import React, { useState } from "react";
import axios from "axios";


function AddRecipe({ update, setUpdate }) {
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = {
      picture,
      title,
      recipe
    };

    axios.post("https://recipebackend-oe7c.onrender.com/recipes", newRecipe).then(() => {
      setUpdate(!update);
      setPicture("");
      setTitle("");
      setRecipe("");
      setShowForm(false);
    });
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div className={`add-recipe-container ${showForm ? 'expanded' : ''}`}>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <h2 className="addTitle">Add a Recipe</h2>
          <label className="add">
            Picture:
            <input
              className="recipeInput"
              type="text"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
              required
            />
          </label>
          <label className="add">
            Title:
            <input
              className="recipeInput"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label className="add">
            Recipe:
            <textarea
              className="recipeInput"
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
              required
            />
          </label>
          <button className="addRecipeBtn" type="submit">Add Recipe</button>
          <button className="cancelRecipeBtn" type="button" onClick={handleCancel}>Cancel</button>
        </form>
      ) : (
        <button className="addRecipeBtn" onClick={() => setShowForm(true)}>Add Recipe</button>
      )}
    </div>
  );
}

export default AddRecipe;