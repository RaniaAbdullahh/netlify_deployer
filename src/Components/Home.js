import { Button } from 'react-bootstrap';
import {useEffect,useState} from 'react';
import Cards from './Cards';
export default function Home(){
    const [recipes, setRecipes] = useState([]);

    async function getRecipes(){
        const url = process.env.REACT_APP_SERVER
        // console.log(111111,url);
        const response = await fetch(`${url}/recipes`);

        const recipesData = await response.json();
        console.log(recipesData)
        setRecipes(recipesData);
    }

    function updateRecipes(newRecipe, id) {
        
       
        let updatedRecipes = recipes.map((recipe)=>{
            if (recipe.id === id) {
                recipe.comment = newRecipe.userComment;
                return recipe;
            }else{
                return recipe;

            }
        })
        setRecipes(updatedRecipes)

    }


    useEffect(()=>{
        getRecipes();
    },[])

    return(
        <>
        <h1>
            this is Home Page
        </h1>
        {/* <button> without bootstrap</button> */}
        <Button variant="success">Get Recipes</Button>
        {
            (recipes.length > 0) && <Cards recipes={recipes}  updateRecipes={updateRecipes}/>
        }
        </>
    )
}