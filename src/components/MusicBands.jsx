import React from 'react'
import data from './data/music-bands.json'



const MusicBands = props => {
  // filter down the data object to only find this categories food
  const bands = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  console.log(bands)
  return (
    <div className={props.match.params.category}>
      <h1>Hello, you are on the {bands.category} page!!!</h1>
      <ul>
        {bands.mbands.map(singer => {
          return (
            <li>
              <header>{singer.name}</header>
              <img src={singer.image} alt="" />
              <h2>{singer.LatestAlbum}</h2>
              <p>{singer.LatestAlbuminformation}</p>
              
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MusicBands