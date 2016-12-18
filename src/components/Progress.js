import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Progress = ({ children, className, rounded, ...rest }) => {
  className = classnames(
    className,
    'c-progress', {
      'c-progress--rounded': rounded
    }
  )

  return (
    <div className={className} {...rest}>
      {children}
    </div>
  )
}

Progress.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  rounded: PropTypes.bool
}

const ProgressBar = ({ children, className, progress, rounded, stack, state, showProgress, style, ...rest }) => {
  className = classnames(
    className,
    'c-progress__bar', {
      [`c-progress__bar--${state}`]: state
    }
  )
  style = {
    ...style,
    width: `${progress}%`
  }

  const Bar = (
    <div className={className} style={style} {...rest}>
      {showProgress ? `${progress}` : children}
    </div>
  )

  if (stack) {
    return Bar
  }

  return (
    <Progress rounded={rounded}>
      {Bar}
    </Progress>
  )
}

ProgressBar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  progress: PropTypes.number.isRequired,
  rounded: PropTypes.bool,
  stack: PropTypes.bool,
  state: PropTypes.oneOf(states),
  showProgress: PropTypes.bool,
  style: PropTypes.object
}

export {
  Progress,
  ProgressBar
}
