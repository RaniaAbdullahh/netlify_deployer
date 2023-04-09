import SingleCard from './Card';

function Cards(props){
    // console.log(222222,props)
        
        return(
            <>
                {
                    props.recipes.map(element =>{

                        return(
                           
                                <SingleCard key={element.id} recipe={element} updateRecipes={props.updateRecipes}/>
                             

                           
                        )
                    })
                }
            </>
        )

    

}

export default Cards;

    


