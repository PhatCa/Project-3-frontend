import axios from "axios";
import { useState } from "react";

const Edit = (props) => {
  const [recipe, setRecipe] = useState({ _id: props._id, picture: '', title: '',...props.currentRecipe });

  const handleEdit = (recipe) => {
    axios
      .put("https://recipebackend-oe7c.onrender.com/recipes/" + recipe._id, recipe)
      axios.get('https://recipebackend-oe7c.onrender.com/recipes').then((res) => {
        props.setAllRecipe(res.data)
        props.setUpdate(!props.update)

      });
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(recipe);
  };

  return (
   <details>
      <summary className="editDropDwn">Edit Recipe:</summary>
    <section className="editForm">
      
      <form name="editForm" onClick={handleSubmit}>
        <label htmlFor="image">Image:</label>
        <input
          className="editImage"
          type="text"
          name="picture"
          onChange={handleChange}
          value={recipe.picture}
        />
        <br />
        <br />
        <label htmlFor="title">Title:</label>
        <input
          className="editTitle"
          type="text"
          name="title"
          onChange={handleChange}
          value={recipe.title}
        />
        <br />
        <label htmlFor="recipe">Recipe:</label>
        <input
          className="editRecipe"
          type="text"
          name="recipe"
          onChange={handleChange}
          value={recipe.recipe}
        />
        <br />
        <button className="editRecipeBtn">
          Edit
        </button>
      </form>
    </section>
    </details>
  );
};

export default Edit;
