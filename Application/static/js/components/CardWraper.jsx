import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import Card from './Card'

const button = {
  boxShadow:'none'
}

const CardWraper = () => (
  <Modal trigger={<Button basic style={button}><Card /></Button>}>
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

export default CardWraper
