const TotalSection = props => {
  const getTotal = props.getTotal
  return (
    <div className="total-section">
      <div>
        <h3>Total</h3>
      </div>
      <div>
        <span className="total-number">{`£${getTotal()}`}</span>
      </div>
    </div>
  )
}

export default TotalSection
