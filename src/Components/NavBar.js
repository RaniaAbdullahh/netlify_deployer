import {Link } from "react-router-dom"
import {Navbar,Container,Nav} from 'react-bootstrap';

export default function NavBar(){
    return(
        <>
        {/* <Link to ="/"> Home</Link>
        <Link to ="/favRecipes"> Favorite Recipes </Link> */}
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                          <Nav.Link href="/">Home</Nav.Link>
                          <Nav.Link href="/favRecipes"> Favorite Recipes</Nav.Link>
    
                    </Nav>
            </Container>
        </Navbar>


        </>

    )
}


