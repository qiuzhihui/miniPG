import React from 'react'
import { Card } from 'semantic-ui-react'
import { Grid, Form, Image } from 'semantic-ui-react'
import ImageCard from './ImageCard'
import ImageGallery from './ImageGallery'
import PaginationMenu from './PaginationMenu'
import SideSelector from './SideSelector'



const group = {
    margin: '10px',
}

const panel = {
    margin: '16px',
}

const ImageBlock = {
    textAlign: 'center'
}

const MainBody = () => (
    <div style={panel}>
        <Grid celled>
            <Grid.Row>
              <Grid.Column tablet={5} computer={4} only='tablet computer' as={Form}>
                <SideSelector />
              </Grid.Column>
              <Grid.Column mobile={16}tablet={11} computer={12} style={ImageBlock}>
                <PaginationMenu />
                <ImageGallery />
                <PaginationMenu />

              </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default MainBody


