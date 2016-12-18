import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Tree = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-tree'
  )

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

Tree.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const TreeItem = ({ children, className, expandable, expanded, ...rest }) => {
  className = classnames(
    className,
    'c-tree__item', {
      'c-tree__item--expandable': expandable,
      'c-tree__item--expanded': expanded
    }
  )

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

TreeItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool
}

export {
  Tree,
  TreeItem
}
