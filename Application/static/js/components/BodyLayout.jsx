import _ from 'lodash'
import React, { Component } from 'react'
import { Grid, Header, Image, Item, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='static/assets/images/paragraph.png' />

export default class BodyLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleContextRef = contextRef => this.setState({ contextRef })
  }

  render() {
    const { contextRef } = this.state

    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              <Rail position='left'>
                <Sticky context={contextRef}>
                  <Item.Group divided>
                    {_.times(12, i => (
                      <Item key={i}>
                        <Item.Image size='tiny' src='static/assets/images/paragraph.png' />
                        <Item.Content>
                          <Item.Header as='a'>Select options</Item.Header>
                          <Item.Meta>By Author</Item.Meta>
                        </Item.Content>
                      </Item>
                    ))}
                  </Item.Group>
                </Sticky>
              </Rail>

              {_.times(40, i => <Placeholder key={i} />)}

              <Rail position='right'>
                <Sticky context={contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='static/assets/images/elliot.jpg' />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}