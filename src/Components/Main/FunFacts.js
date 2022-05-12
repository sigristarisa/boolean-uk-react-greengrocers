const FunFacts = props => {
  const isDetailDisplayed = props.isDetailDisplayed
  const clickedStoreItem = props.clickedStoreItem
  return (
    <div className="cart">
      <div className="fun-facts">
        <h2>{clickedStoreItem.name}</h2>
        <p>{clickedStoreItem.facts}</p>
        <button onClick={() => isDetailDisplayed(false, '')}>Back</button>
      </div>
    </div>
  )
}

export default FunFacts
