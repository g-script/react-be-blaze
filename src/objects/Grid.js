import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { alignments, behaviors, extendedSizes, gridCellWidths, sizes } from '../misc/constants'

const Grid = ({ align, children, className, noGutter, responsiveness, wrap, ...rest }) => {
  const responsive = responsiveness
    ? responsiveness.map((item) => {
      return `o-grid--${item.size}-${item.behavior}`
    })
    : []

  className = classnames(
    className,
    responsive,
    'o-grid', {
      'o-grid--no-gutter': noGutter,
      'o-grid--wrap': wrap,
      [`o-grid--${align}`]: align
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  align: PropTypes.oneOf(alignments),
  children: PropTypes.any,
  className: PropTypes.string,
  noGutter: PropTypes.bool,
  responsiveness: PropTypes.arrayOf(
    PropTypes.shape({
      behavior: PropTypes.oneOf(behaviors).isRequired,
      size: PropTypes.oneOf(sizes).isRequired
    })
  ),
  wrap: PropTypes.bool
}

const Cell = ({ align, children, className, fixed, hidden, noGutter, offset, responsiveness, size, width, ...rest }) => {
  const responsive = responsiveness
    ? responsiveness.map((item) => {
      return `o-grid__cell--width-${item.width}@${item.size}`
    })
    : []

  className = classnames(
    className,
    responsive,
    'o-grid__cell', {
      'o-grid__cell--hidden': hidden,
      'o-grid__cell--no-gutter': noGutter,
      'o-grid__cell--visible': !hidden,
      'o-grid__cell--width-fixed': fixed,
      [`o-grid__cell--${align}`]: align,
      [`o-grid__cell--offset-${offset}`]: offset,
      [`o-grid__cell--width-${width}${size ? `@${size}` : ''}`]: width && width > 0 && width <= 100
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Cell.propTypes = {
  align: PropTypes.oneOf(alignments),
  children: PropTypes.any,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  hidden: PropTypes.bool,
  noGutter: PropTypes.bool,
  offset: PropTypes.oneOf(gridCellWidths),
  responsiveness: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.oneOf(sizes).isRequired,
      width: PropTypes.number.isRequired
    })
  ),
  size: PropTypes.oneOf(extendedSizes),
  width: PropTypes.number
}

export {
  Cell,
  Grid
}
