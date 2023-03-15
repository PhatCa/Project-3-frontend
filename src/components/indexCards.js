import {useState} from 'react'
import DeleteButton from './delete'
import Edit from './edit'
import Card from "react-bootstrap/Card";


const IndexComponent = (props) =>{

 return(
    <section className="cards">

    <ul className="card-container">
    {props.allRecipe.map((recipe)=>{
        return(
            <>
            <Card>
            <img src={recipe.picture} className="cardImages"/>
            <h1 clasName="cardTitle">Title: {recipe.title}</h1>
            <h1 className="cardRecipe">Recipe: {recipe.recipe}</h1>

            <DeleteButton delete={props.setAllRecipe}  currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp}/>
            
            <Edit currentRecipe={recipe} update={props.update} setUpdate={props.setUpdate} updateApp={props.updateApp} _id={recipe._id} setAllRecipe={props.setAllRecipe}/>
            </Card>
            </>
        )
    })}
    </ul>
    </section>
 )
}

export default IndexComponent