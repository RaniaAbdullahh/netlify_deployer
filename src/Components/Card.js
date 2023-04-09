import {Card,Button} from 'react-bootstrap';
import {useState} from 'react';
import ModalRecipe from './ModalRecipe';
export default function SingleCard(props){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>

        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.recipe.image} />
        <Card.Body>
          <Card.Title>{props.recipe.title}</Card.Title>
          <Card.Text>
            {props.recipe.time} minutes
          </Card.Text>
          <Button variant="primary" onClick={handleShow}>show modal</Button>
        </Card.Body>
      </Card>
      <ModalRecipe show={show}  handleClose={handleClose} recipe={props.recipe} updateRecipes={props.updateRecipes}/>
        </>
  
    )
}