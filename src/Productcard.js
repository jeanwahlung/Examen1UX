

import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Product extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Card>
          <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{ this.props.person.name }.</CardTitle>
            <CardSubtitle>{ this.props.person.prize } </CardSubtitle>
            <Button onClick={console.log("hello world")}>Add Cart</Button>
          </CardBody>
        </Card>
      </div>

    );
  }

};

export default Product;