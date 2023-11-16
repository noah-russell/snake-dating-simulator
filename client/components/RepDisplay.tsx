import React from 'react'

interface RepDisplayProps {
  repCount: number
}

const RepDisplay: React.FC<RepDisplayProps> = ({ repCount }) => {
  return <p>Current Rep: {repCount}</p>
}

export default RepDisplay
