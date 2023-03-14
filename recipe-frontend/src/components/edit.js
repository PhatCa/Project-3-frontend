import axios from "axios";
import { useState } from "react";

const Edit = (props) => {
  const [recipe, setRecipe] = useState({ _id: props._id, picture: '', title: '',...props.currentRecipe });

  const handleEdit = (recipe) => {
    axios
      .put("http://localhost:3000/recipes/" + recipe._id, recipe)
      axios.get('http://localhost:3000/recipes').then((res) => {
        props.setAllRecipe(res.data)
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
      
      <form name="editForm">
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
        <button className="editRecipeBtn" onClick={handleSubmit}>
          Edit
        </button>
      </form>
    </section>
    </details>
  );
};

export default Edit;
