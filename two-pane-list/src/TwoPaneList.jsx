import { useState } from 'react'

export const TwoPaneList = ({ albums }) => {
  const [shownAlbums, setShownAlbums] = useState(albums)
  const [selectedAlbum, setSelectedAlbum] = useState()
  const filterAlbums = (e) => {
    const searchString = e.target.value
    setShownAlbums(albums.filter((album) => album.title.startsWith(searchString)))
  }

  return <div className="columns">
    <article className="m-0 panel is-info is-half">
      <p className="panel-heading">
        Albums
      </p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input is-success" type="text" placeholder="Search" onChange={filterAlbums}/>
          <span className="icon is-left">🔎</span>
        </p>
      </div>
      {shownAlbums.map(album => <Title key={album.title} album={album} setSelectedAlbum={setSelectedAlbum} />)}
    </article>

    <div className="tile is-vertical has-background-white box is-half">
      {selectedAlbum ? 
        <Content content={selectedAlbum.content} /> : 
        <p className='has-text-black m-auto is-size-1 has-text-centered'>Click a Title!</p>
      }
    </div>
  </div>
}

const Title = ({album, setSelectedAlbum}) => {
  const setAlbum = () => {
    setSelectedAlbum(album)
  }

  return <a className="panel-block" onClick={setAlbum}>
    <span className="panel-icon">💿</span>
    {album.title}
  </a>
}

const Content = ({content}) => 
  content.map((paragraph, index) => 
    <p key={index} className="mb-2">
      {paragraph}
    </p>
  )
