import { useState } from 'react'

export const TwoPaneList = ({ albums }) => {
  const [selectedAlbum, setSelectedAlbum] = useState()

  return <div className="tile">
    <div className="tile is-vertical has-background-primary rounded">
      {albums.map(album => <Title album={album} setSelectedAlbum={setSelectedAlbum} />)}
    </div>
    <div className="tile is-vertical has-background-info">
      {selectedAlbum ? 
        <Content content={selectedAlbum.content} /> : 
        <p>Click a Title!</p>
      }
    </div>
  </div>
}

const Title = ({album, setSelectedAlbum}) => {
  const setAlbum = () => {
    setSelectedAlbum(album)
  }

  return <button type="button" onClick={setAlbum}>{album.title}</button>
}

const Content = ({content}) => 
  content.map(paragraph => <p>{paragraph}</p>)
