import { Menu, Bell } from 'lucide-react'

function Topbar({ page, setMobile, toast }) {
  return (
    <header className="topbar">
      <button className="hamb" onClick={() => setMobile(true)}>
        <Menu />
      </button>
      <div className="crumb">
        Workspace <span>/</span> <b>{page}</b>
      </div>
      <div className="top-actions">
        <div className="date-chip">03 November 2026</div>
        <button className="icon-btn" onClick={() => toast('Tidak ada notifikasi baru')}>
          <Bell size={18} />
          <i />
        </button>
        <div className="top-avatar">AR</div>
      </div>
    </header>
  )
}

export default Topbar

