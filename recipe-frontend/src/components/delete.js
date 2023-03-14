import {useState} from 'react'
import axios from 'axios'

const Delete = (props) =>{
   const handleDelete = () => {
      axios.delete(`http://https://recipebackend-oe7c.onrender.com/recipes/${props.currentRecipe._id}`)
      .then(() => {
        axios.get('http://https://recipebackend-oe7c.onrender.com/recipes').then((res) => {
          props.delete(res.data)
        })
      })
    }

 return(
   <button className="deleteBtn" onClick={ (e)=>{ handleDelete(props.currentRecipe) } }>Delete</button>
 )
}

export default Delete