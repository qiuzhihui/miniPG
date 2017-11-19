import React from 'react'
import { List } from 'semantic-ui-react'

const para = {
  marginBottom: '50px',
  paddingRight: '50px'
}

const list = {
}


const FooterLegal = () => (
  <div>
    <p style={para}>
      Prospect auto inc is bringing trust and simplicity to the used car market. Our goal is to turn what is universally regarded as a burdensome life event into a delightful experience.
    </p>
    <List bulleted horizontal type={list}>
      <List.Item >© Prospect auto</List.Item>
      <List.Item >Created By Jumbos</List.Item>
      <List.Item >Copyright Aug. 2017</List.Item>
    </List>
  </div>
)

export default FooterLegal