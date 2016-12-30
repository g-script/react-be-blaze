import classnames from 'classnames'
import React, { PropTypes } from 'react'

import { states } from '../misc/constants'

const Input = ({ className, hint, iconLeft, iconRight, label, state, ...rest }) => {
  className = classnames(
    className,
    'c-field', {
      'c-field--label': !iconLeft && !iconRight && label,
      [`c-field--${state}`]: state
    }
  )

  if (iconLeft || iconRight) {
    const oClassName = classnames(
      'o-field', {
        'o-field--icon-left': iconLeft,
        'o-field--icon-right': iconRight,
        'c-field--label': label
      }
    )
    const leftIconClassName = classnames(
      iconLeft,
      'c-icon'
    )
    const rightIconClassName = classnames(
      iconRight,
      'c-icon'
    )

    if (label) {
      return (
        <label className='c-label o-form-element'>
          {label}
          <div className={oClassName}>
            {iconLeft && (<i className={leftIconClassName} />)}
            <input className={className} {...rest} />
            {iconRight && (<i className={rightIconClassName} />)}
          </div>
          {hint && (<div className='c-hint'>{hint}</div>)}
        </label>
      )
    }

    return (
      <div className={oClassName}>
        {iconLeft && (<i className={leftIconClassName} />)}
        <input className={className} {...rest} />
        {iconRight && (<i className={rightIconClassName} />)}
      </div>
    )
  }

  if (label) {
    return (
      <label className='c-label o-form-element'>
        {label}
        <input className={className} {...rest} />
        {hint && (<div className='c-hint'>{hint}</div>)}
      </label>
    )
  }

  return (
    <input className={className} {...rest} />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.oneOf(states)
}

const TextArea = ({ className, hint, label, state, ...rest }) => {
  className = classnames(
    className,
    'c-field', {
      'c-field--label': label,
      [`c-field--${state}`]: state
    }
  )

  if (label) {
    return (
      <label className='c-label o-form-element'>
        {label}
        <textarea className={className} {...rest} />
        {hint && (<div className='c-hint'>{hint}</div>)}
      </label>
    )
  }

  return (
    <textarea className={className} {...rest} />
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.oneOf(states)
}

const Select = ({ children, className, hint, label, state, ...rest }) => {
  className = classnames(
    className,
    'c-field', {
      'c-field--label': label,
      [`c-field--${state}`]: state
    }
  )

  if (label) {
    return (
      <label className='c-label o-form-element'>
        {label}
        <select className={className} {...rest}>
          {children}
        </select>
        {hint && (<div className='c-hint'>{hint}</div>)}
      </label>
    )
  }

  return (
    <select className={className} {...rest}>
      {children}
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.oneOf(states)
}

const InputGroup = ({ btnLeft, btnRight, children, className, rounded, stacked, ...rest }) => {
  className = classnames(
    className,
    'c-input-group', {
      'c-input-group--stacked': stacked,
      [`c-input-group--rounded${typeof rounded === 'string' ? `-${rounded}` : ''}`]: rounded
    }
  )

  return (
    <div className={className} {...rest}>
      {btnLeft}
      {children && children.map && children.map((child) => (
        <div className='o-field'>
          {child}
        </div>
      ))}
      {btnRight}
    </div>
  )
}

InputGroup.propTypes = {
  btnLeft: PropTypes.element,
  btnRight: PropTypes.element,
  children: PropTypes.any,
  className: PropTypes.string,
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  stacked: PropTypes.bool
}

const Choice = ({ children, className, ...rest }) => {
  className = classnames(
    className,
    'c-field',
    'c-field--choice'
  )

  return (
    <label className={className}>
      <input {...rest} /> {children}
    </label>
  )
}

Choice.propType = {
  children: PropTypes.any,
  className: PropTypes.string
}

const Fieldset = ({ children, className, legend, ...rest }) => {
  className = classnames(
    className,
    'o-fieldset'
  )

  return (
    <fieldset className={className} {...rest}>
      {legend && (<legend className='o-fieldset__legend'>{legend}</legend>)}
      {children}
    </fieldset>
  )
}

Fieldset.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  legend: PropTypes.string
}

export {
  Choice,
  Fieldset,
  Input,
  InputGroup,
  Select,
  TextArea
}
