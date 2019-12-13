import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const Featured = () => {

     
  const APP_ID = 'fe47d0f9';
  const APP_KEY = '7b9a7dc9587ea11ce9c7ad2a79815acb';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('winter');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
        <h1 className="additional-title" >Featured Seasonal Recipes</h1>

      <div className="card-columns">
        {recipes.map(recipe => 
          <Recipe
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
          />)}
      </div>

    </div>
  );

}

export default Featured;