import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Log from './loginrender';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './Productcard'
import './loginrender.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form,FormControl} from 'react-bootstrap';
class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        },
        {
          name: "Chaleco 1",
          prize: "100lps"
        }




      ]
    }
  }
  render() {

    let peopleCards = this.state.people.map(person => {
      return (
        <div class="col-sm-3">
          <ProductCard person={ person } />

        </div>
      )
    });
    return (

      <div className="containerhome">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>

        <div className="cartcontainer">
          <h2>  Cart </h2>

        </div>
        <div class="col-sm-8">


          <div className="ventascontainer">


            <div class="row">
              { peopleCards }


            </div>
          </div>




        </div>




      </div>

    );
  }
}

export default App;
