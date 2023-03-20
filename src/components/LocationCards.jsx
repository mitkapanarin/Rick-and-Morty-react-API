import React from 'react'
import { Link } from 'react-router-dom'

const LocationCards = ({name, type, dimension, id}) => {
  return (
    <Link to={`/location/${id}`} className="card">
    <div className="card-header">
    Type: {type}
    </div>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Dimension: {dimension} </p>
    </div>
  </Link>
  )
  }
export default LocationCards