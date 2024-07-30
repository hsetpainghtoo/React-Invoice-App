import React from 'react'

const MainHeading = ({children,className}) => {
  return (
    <h1 className={`text-3xl font-sans font-bold ${className}`}>{children}</h1>
  )
}

export default MainHeading