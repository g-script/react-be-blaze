import classnames from 'classnames'
import React, { PropTypes } from 'react'

const List = ({ children, className, inline, ordered, unstyled, ...rest }) => {
  className = classnames(
    className,
    'c-list', {
      'c-list--inline': inline,
      'c-list--ordered': ordered,
      'c-list--unstyled': unstyled
    }
  )

  if (ordered) {
    return (
      <ol className={className} {...rest}>
        {children}
      </ol>
    )
  }

  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  inline: PropTypes.bool,
  ordered: PropTypes.bool,
  unstyled: PropTypes.bool
}

const ListItem = ({ children, className, unstyled, ...rest }) => {
  className = classnames(
    className,
    'c-list__item', {
      'c-list__item--unstyled': unstyled
    }
  )

  return (
    <li className={className} {...rest}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  unstyled: PropTypes.bool
}

export {
  List,
  ListItem
}
