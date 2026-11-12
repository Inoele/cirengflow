function Stat({ icon: Icon, label, value, trend, note }) {
  return (
    <div className="panel stat-card">
      <div className="stat-top">
        <div className="stat-icon">
          <Icon size={19} />
        </div>
        <span className="trend">{trend}</span>
      </div>
      <small>{label}</small>
      <strong>{value}</strong>
      <p>{note}</p>
    </div>
  )
}

export default Stat

