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
              <Grid.Column width={3} only='tablet computer' as={Form}>
                <SideSelector />
              </Grid.Column>
              <Grid.Column width={13} style={ImageBlock} centered>
                <ImageGallery />
                <PaginationMenu />
              </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default MainBody


