import React, {useEffect, useState} from 'react'
import { Form } from 'reactstrap';
import Data from './Data';
import '../styles/recipeApp.css';

const Recipe = () => {

    const APP_ID = '3c9f0985';
    const APP_KEY = 'b2f4f7856dfc35e9de885c966e3f7608';
           
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('chicken');

    useEffect(() =>{
        getRecipes();
    }, [query]); 

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
        // console.log(search);
    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch(''); //Clear search
    }

    return(
        <div className="Application">
            <Form onSubmit={getSearch} className="search-form">
                <input className="search-bar form-control" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button btn btn-secondary ml-3" type="submit">
                    Search
                </button>
            </Form>
            <h3 className="text-center mb-5 text-white">Recipe App with Edamam API</h3>
            {recipes.map(recipe => (
                <Data
                key={recipe.recipe.label} 
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
            ))}
        </div>
    )
}

export default Recipe;