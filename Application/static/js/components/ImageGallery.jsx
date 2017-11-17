import React from 'react'
import { Card as CardComp} from 'semantic-ui-react'
import Card from './Card'
import CardWraper from './CardWraper'


const group = {
    margin: '10px',
    textAlign: 'left',
}

const ImageGallery = () => (
    <CardComp.Group style={group}>
      {Array(6).fill(0).map((el, i) =>
        <CardWraper key={i} />
      )}
    </CardComp.Group>
)

export default ImageGallery


