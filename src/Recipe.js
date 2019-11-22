import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, url}) => {

                    let ingredientList = ingredients.map(ingredient => 
                    <li>{ingredient.text}</li>)

    return(
        // <div className={style.recipe}>
        //     <h1>{title}</h1>
        //     <h4 id={style.calories}>{Math.ceil(calories)} Calories</h4>
        //     <ul className={style.ingredients}>
        //         {ingredients.map(ingredient => 
        //             <li>{ingredient.text}</li>
        //         )}
        //     </ul>
        //     <img className={style.image} src={image} alt=""/>
        // </div>

            <div className="card">
                <img src={image} className="card-img-top"/>
                <div className="card-body">
                    <a href={url} target="_blank">
                        <h5 className="card-title">{title}</h5>
                    </a>
                    <p className="card-text">{ingredientList}</p>
                    <p className="card-text"><small className="text-muted">{Math.ceil(calories)} Calories</small></p>
                </div>
            </div>

    )
}

export default Recipe;