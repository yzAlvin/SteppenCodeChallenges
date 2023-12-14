export const TwoPaneList = ({ data }) => {
  const titles = data.map((d) => d.title)
  return <div className="tile is-ancestor">
    <div className="tile is-vertical has-background-primary rounded">
      {titles.map(title => <p>{title}</p>)}
    </div>
    <div className="tile is-vertical has-background-info"></div>
  </div>
}
