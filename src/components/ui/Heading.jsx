import { Plus } from 'lucide-react'

function Heading({ title, desc, action, actionText }) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">RUJAK CIRENG WORKSPACE</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      {action && (
        <button className="primary" onClick={action}>
          <Plus size={17} />
          {actionText}
        </button>
      )}
    </div>
  )
}

export default Heading

