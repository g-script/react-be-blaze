import React, { Component } from 'react'
import { Alert, Cell, Heading, Link, Paragraph } from 'react-be-blaze'

import Cells from './objects/Cells'
import Containers from './objects/Containers'
import Drawers from './objects/Drawers'
import Grids from './objects/Grids'
import Images from './objects/Images'
import Medias from './objects/Medias'
import Modals from './objects/Modals'
import Panels from './objects/Panels'

export default class Objects extends Component {
  constructor (props) {
    super(props)

    this.closeDocStatus = this.closeDocStatus.bind(this)
    this.state = {
      docStatusClosed: false
    }
  }

  closeDocStatus (e) {
    e.preventDefault()

    this.setState({
      docStatusClosed: !this.state.docStatusClosed
    })
  }

  render () {
    return (
      <Cell>
        <Heading size='super'>Objects</Heading>
        <Alert state='success' onCloseClick={this.closeDocStatus}>Objects docs are up to date!</Alert>
        <Containers />
        <Grids />
        <Cells />
        <Images />
        <Medias />
        <Modals />
        <Drawers />
        <Panels />
      </Cell>
    )
  }
}
