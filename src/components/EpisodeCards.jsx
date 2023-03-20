import React from 'react'
import {Link} from 'react-router-dom'

const EpisodeCards = ({air_date, episode, name, id}) => {
  return (
    <Link to={`/episode/${id}`} className="card">
    <div className="card-header">
      Aired on :{air_date}
    </div>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">Episode Number {episode}.</p>
    </div>
  </Link>
  )
}

export default EpisodeCards