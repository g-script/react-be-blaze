import classnames from 'classnames'
import React, { PropTypes } from 'react'

const Table = ({ caption, children, className, clickable, condensed, striped, ...rest }) => {
  className = classnames(
    className,
    'c-table', {
      'c-table--clickable': clickable,
      'c-table--condensed': condensed,
      'c-table--striped': striped
    }
  )

  return (
    <table className={className} {...rest}>
      {caption && <caption className='c-table--caption'>{caption}</caption>}
      {children}
    </table>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  condensed: PropTypes.bool,
  striped: PropTypes.bool
}

const TableRow = ({ children, className, clickable, inactive, ...rest }) => {
  className = classnames(
    className,
    'c-table__row', {
      'c-table__row--clickable': clickable,
      'c-table__row--inactive': inactive
    }
  )

  return (
    <tr className={className} {...rest}>
      {children}
    </tr>
  )
}

TableRow.proTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  clickable: PropTypes.bool,
  inactive: PropTypes.bool
}

const TableCell = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-table__cell'
  )

  return (
    <td className={className} {...rest}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const TableHead = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-table__head'
  )

  return (
    <thead className={className} {...rest}>
      <TableRow className='c-table__row--heading'>
        {children}
      </TableRow>
    </thead>
  )
}

TableHead.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

const TableBody = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-table__body'
  )

  return (
    <tbody className={className} {...rest}>
      {children}
    </tbody>
  )
}

TableBody.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
}
