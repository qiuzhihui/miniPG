import React from 'react'
import { Card } from 'semantic-ui-react'
import CardExampleCardProps from './CardExampleCardProps'

const group = {
    margin: '15px',
}

const panel = {
    width: '70%',
    margin: '16px',
    border: '1px solid',
    borderColor: '#d6d7da',
    borderRadius: '5px',
}

const ImageGallery = () => (
    <div style={panel}>
      <Card.Group style={group}>
          {Array(6).fill(0).map((el, i) =>
            <CardExampleCardProps key={i} />
          )}
      </Card.Group>
    </div>
)

export default ImageGallery
