import React from 'react'
import FooterSocialIcon from './FooterSocialIcon'
import FooterLegal from './FooterLegal'
import { Grid, Form, Image } from 'semantic-ui-react'



const footer = {
  background: '#383939',
  color: 'rgba(255,255,255,.6)',
  paddingBottom: '50px',
  clear: 'both'
}

const style = {
    display: 'block'
}

const brandLabel = {
  marginTop: '50px',
  marginBottom: '15px',
  fontSize: '24px'
}

const section = {
   marginTop: '20px'
}

const AppFooter = () => (
  <footer style={footer}>
    <Grid style={style}>
      <Grid.Row>
        <Grid.Column tablet={16} computer={16}>
          <h3 style={brandLabel}> Prospect Auto Inc (三友车行)</h3>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column tablet={16} computer={8}>
          <FooterLegal />
        </Grid.Column>
        <Grid.Column tablet={16} computer={8}>
          <FooterSocialIcon />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </footer>
)

export default AppFooter