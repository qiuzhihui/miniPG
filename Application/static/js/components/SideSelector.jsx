import React, { Component } from 'react'
import { Form, Grid, Transition } from 'semantic-ui-react'

const transitions = [
  'scale',
  'fade', 'fade up', 'fade down', 'fade left', 'fade right',
  'horizontal flip', 'vertical flip',
  'drop',
  'fly left', 'fly right', 'fly up', 'fly down',
  'swing left', 'swing right', 'swing up', 'swing down',
  'browse', 'browse right',
  'slide down', 'slide up', 'slide right',
]
const options = transitions.map(name => ({ key: name, text: name, value: name }))

export default class SideSelector extends Component {
  constructor(props) {
    super(props)
    this.state = { animation: transitions[0], price: 25000, year:2000, miles: 30000, visible: true }
    this.handleChange = (e, { name, value }) => this.setState({ [name]: value })
    this.handleVisibility = () => this.setState({ visible: !this.state.visible })

  }

  render() {
    const { animation, price, year, miles, visible } = this.state

    return (
        <div>
          <Form.Select
            label='Choose transition'
            name='animation'
            onChange={this.handleChange}
            options={options}
            value={animation}
          />
          <Form.Input
            label={`Price: ${price}$ `}
            min={3000}
            max={50000}
            name='price'
            onChange={this.handleChange}
            step={200}
            type='range'
            value={price}
          />
          <Form.Input
            label={`Year: ${year} `}
            min={1990}
            max={2018}
            name='year'
            onChange={this.handleChange}
            step={2}
            type='range'
            value={year}
          />
          <Form.Input
            label={`Miles: ${miles} mile `}
            min={100}
            max={100000}
            name='miles'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={miles}
          />
          <Form.Button content={visible ? 'Unmount' : 'Mount'} onClick={this.handleVisibility} />
        </div>
    )
  }
}
