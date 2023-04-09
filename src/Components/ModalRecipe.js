import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useRef} from 'react';

export default function ModalRecipe(props) {

  let commentRef = useRef();

  const commentHandler=(e)=>{
    e.preventDefault();
    let userComment = commentRef.current.value
    console.log({userComment});
    let newRecipe = {...props.recipe, userComment};
    props.updateRecipes(newRecipe, props.recipe.id)
  }

  async function  handelAddtoFav(e,recipe){
    e.preventDefault();

    
    let url=`${process.env.REACT_APP_SERVER}/addFavRecipe`;
    let data ={
      title:recipe.title,
      readyInMinutes:recipe.time,
      image:recipe.image,
      comment :recipe.comment,
      instructions:recipe.summary
    }

    let response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  })

 

    let AddedRecipe = await response.json();
    console.log(11111,AddedRecipe)


  }

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.recipe.title}</Modal.Title>
      </Modal.Header>
      <img src={props.recipe.image} alt={props.recipe.title} />
      <Modal.Body>
        {props.recipe.summary}
        <br/>
        <br/>
      
        {props.recipe.comment?props.recipe.comment:"No comment Added"}
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Comment</Form.Label>
            <Form.Control  ref={commentRef} type="text" placeholder="Enter your own comment" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>commentHandler(e)}>
            add comment
          </Button>

          <Button variant="primary" type="submit" onClick={(e)=>handelAddtoFav(e,props.recipe)}>
            add to fav
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={props.handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
