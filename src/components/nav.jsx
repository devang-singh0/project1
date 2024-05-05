import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import { fetchCourses } from '../store/slices/course';
import { searchCourse } from '../store/slices/course';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function NavBar() {
  let location = useLocation();
  let navigate = useNavigate();
  let user = useSelector((state) => state.user);
  let [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
  }, []);
  const handleSearch = (e) => {
    if (e.target.value === '') {
      dispatch(fetchCourses());
    }
    setSearch(e.target.value);
    dispatch(searchCourse(search));
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Skills school</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate(`/user`)}>Your courses</Nav.Link>
          </Nav>
          {location.pathname === '/' ? (
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={handleSearch}
                value = {search}
              />
            </Form>

          ) : (
            ''
          )
          }
          <Nav.Link>{user?.currentUser?.name}</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;