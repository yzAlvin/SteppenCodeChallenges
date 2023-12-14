export const TwoPaneList = ({ albums }) => {
  return <div className="tile is-ancestor">
    <div className="tile is-vertical has-background-primary rounded">
      {albums.map(album => <p>{album.title}</p>)}
    </div>
    <div className="tile is-vertical has-background-info"></div>
  </div>
}
