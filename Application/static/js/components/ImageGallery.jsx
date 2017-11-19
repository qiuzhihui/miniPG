import React, { Component } from 'react'
import { Card as CardComp} from 'semantic-ui-react'
import Card from './Card'
import CardWraper from './CardWraper'


const group = {
    margin: '10px',
    textAlign: 'left',
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch('/test')
      .then(response => response.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  render() {
    if (!this.state.data) {
      return <div>Loading</div>;
    }
    return (
        <CardComp.Group style={group}>
          {Array(6).fill(0).map((el, i) =>
            <CardWraper key={i} carData={this.state.data} />
          )}
        </CardComp.Group>
    )
  }
}

