import React from 'react'
import { Alert, Cell, Heading } from 'react-be-blaze'

import Cells from './objects/Cells'
import Containers from './objects/Containers'
import Drawers from './objects/Drawers'
import Grids from './objects/Grids'
import Images from './objects/Images'
import Medias from './objects/Medias'
import Modals from './objects/Modals'
import Panels from './objects/Panels'

const Objects = () => (
  <Cell>
    <Heading size='super'>Objects</Heading>
    <Alert state='success' closable>Objects docs are up to date!</Alert>
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

export default Objects
