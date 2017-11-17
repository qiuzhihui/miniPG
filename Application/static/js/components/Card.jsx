import React from 'react'
import { Card as CardComp, Icon, Image } from 'semantic-ui-react'


const price = {
  float:'right',
  color:'black',
  fontSize:'15px',
}



const Card = () => (
  <CardComp>
    <Image src='static/assets/images/elliot.jpg' />
    <CardComp.Content extra>
      <CardComp.Header>
        Mini Cooper 2003
      </CardComp.Header>
      <CardComp.Meta>
        <span>
          14k miles
        </span>
        <b style={price}>
          $15000
        </b>
      </CardComp.Meta>
    </CardComp.Content>
  </CardComp>
)

export default Card