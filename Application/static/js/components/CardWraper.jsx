import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Card from './Card'
import { Card as CardComp, Icon } from 'semantic-ui-react'


const price = {
  float:'right',
  color:'black',
  fontSize:'15px',
}

const content = {
  width:'100%',
}

const header = {
  width:'100%',
  textAlign:'left',
}

const meta = {
  width:'100%',
}

const miles = {
  float:'left',
}

export default class CardWraper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const card = (
      <CardComp as={Button} centered>
        <Image src={this.props.carData.imageURL} />
        <CardComp.Content extra style={content}>
          <CardComp.Header style={header}>
            {this.props.carData.carType}
          </CardComp.Header>
          <CardComp.Meta style={meta}>
            <span style={miles}>
              {this.props.carData.milage} miles
            </span>
            <b style={price}>
              ${this.props.carData.price}
            </b>
          </CardComp.Meta>
        </CardComp.Content>
      </CardComp>
    )

    return (
      <Modal trigger={ card }>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='static/assets/images/elliot.jpg' />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>We've found the following gravatar image associated with your e-mail address.</p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

