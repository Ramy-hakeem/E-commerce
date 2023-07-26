import React from 'react'

function CustomInput(props) {
  const { type, name, placeholder, className, classdiv } = props;
  return (
    < div className={classdiv} >
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </div >
  )
}

export default CustomInput