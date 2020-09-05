import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Button = ({ onClick, label }) => {
  return (
    <>
      <button type="submit" onClick={onClick} className="button">
        {label}
      </button>
    </>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
}
export default Button
