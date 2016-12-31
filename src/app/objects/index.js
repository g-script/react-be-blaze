import React from 'react'

import Cells from './Cells'
import Containers from './Containers'
import Drawers from './Drawers'
import Grids from './Grids'
import Images from './Images'
import Medias from './Medias'
import Modals from './Modals'
import Panels from './Panels'

const AllObjects = () => (
  <div>
    <Containers />
    <Grids />
    <Cells />
    <Images />
    <Medias />
    <Modals />
    <Drawers />
    <Panels />
  </div>
)

export default AllObjects
