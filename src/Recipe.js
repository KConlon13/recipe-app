import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <h4 id={style.calories}>{Math.ceil(calories)} Calories</h4>
            <ul className={style.ingredients}>
                {ingredients.map(ingredient => 
                    <li>{ingredient.text}</li>
                )}
            </ul>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;