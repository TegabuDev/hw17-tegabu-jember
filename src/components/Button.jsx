import React from 'react'

const Button = ({onClick,className,content}) => {
  return (
    <>
    <button onClick={onClick} className={className}>{content}</button>
    </>
  )
}

export default Button