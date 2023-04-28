import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import books from '../../images/books.png';
import './navBar.css';
import { Link } from 'react-router-dom';
import { useNavBar } from './navBarHelper';

const NavBar = () => {
  const {authors}=useNavBar()

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container className="nav-bar">
        <Link to="/" className="nav-bar-title">
          <img
            src={books}
            width="110"
            height="110"
            className="d-inline-block align-top"
          />
          <p className="nav-bar-title-text">Library</p>
        </Link>
        <Nav className="nav-bar-mid">
          <Link to='/' className="item">
            Home
          </Link>
          <Link to='/form' state={{authorForm:true}} className="item">
            Create Author
          </Link>
          <Link to='/form' state={{authorForm:false, authors:authors}} className="item">
            Create Book
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
