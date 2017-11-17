import React from 'react'
import { Card } from 'semantic-ui-react'
import ImageCard from './ImageCard'
import { Grid, Image } from 'semantic-ui-react'


const group = {
    margin: '10px',
    textAlign: 'left',
}

const ImageGallery = () => (
    <Card.Group style={group}>
      {Array(6).fill(0).map((el, i) =>
        <ImageCard key={i} />
      )}
    </Card.Group>
)

export default ImageGallery


