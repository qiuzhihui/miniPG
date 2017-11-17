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
    this.state = { animation: transitions[0], duration: 500, visible: true }
    this.handleChange = (e, { name, value }) => this.setState({ [name]: value })
    this.handleVisibility = () => this.setState({ visible: !this.state.visible })

  }

  render() {
    const { animation, duration, visible } = this.state

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
            label={`Price: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Input
            label={`Year: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Input
            label={`Miles: ${duration}ms `}
            min={100}
            max={2000}
            name='duration'
            onChange={this.handleChange}
            step={100}
            type='range'
            value={duration}
          />
          <Form.Button content={visible ? 'Unmount' : 'Mount'} onClick={this.handleVisibility} />
        </div>
    )
  }
}
