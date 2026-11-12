import { ArrowUpRight } from 'lucide-react'

function Quick({ icon: Icon, title, desc, onClick }) {
  return (
    <button className="quick-row" onClick={onClick}>
      <div className="quick-icon">
        <Icon size={18} />
      </div>
      <div>
        <b>{title}</b>
        <small>{desc}</small>
      </div>
      <ArrowUpRight size={16} />
    </button>
  )
}

export default Quick

