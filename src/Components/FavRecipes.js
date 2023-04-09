import {useEffect, useState} from 'react';
import {Card,Button} from 'react-bootstrap';
export default function Home(){
    const[favData, setFavData] = useState([])
    async function getFavoriteRecipes(){

        let url =`${process.env.REACT_APP_SERVER}/favRecipes`
        let response = await fetch(url,{
            method: 'GET',
        })
        let recivedData = await response.json();
        setFavData(recivedData)

    }
   async function handelDelete(id){
       let url =`${process.env.REACT_APP_SERVER}/deleteFavRecipe/${id}`
       let response = await fetch(url,{
           method : 'DELETE',
       })
    //    let deletedData = await response.json();

       if (response.status==204){
            getFavoriteRecipes()
           alert("deleted successfully")
       }
    }
    useEffect(()=>{
        getFavoriteRecipes()
    },[])
    return(
        <>
        <h1>
            this is Favorite Recipes Page
        </h1>
        {
            favData && favData.map(recipe=>{
                return(
                    <>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                      <Card.Title>{recipe.title}</Card.Title>
                      <Card.Text>
                        {recipe.time} minutes
                      </Card.Text>
                      <Button variant="primary" onClick={()=>handelDelete(recipe.id)}>delete</Button>
                    </Card.Body>
                  </Card>
                  </>
                )
            })
        }
        </>
    )
}