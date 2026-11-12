import {
  LayoutDashboard, Users, Package, ShoppingCart,
  ReceiptText, Send, History, Leaf, X, LogOut, ArrowUpRight,
} from 'lucide-react'

const nav = [
  ['Dashboard', LayoutDashboard],
  ['Data Pelanggan', Users],
  ['Data Produk', Package],
  ['Transaksi', ShoppingCart],
  ['Invoice Digital', ReceiptText],
  ['Pengiriman Invoice', Send],
  ['Riwayat Transaksi', History],
]

function Sidebar({ page, navigate, mobile, setMobile, onLogout, toast }) {
  return (
    <aside className={`sidebar ${mobile ? 'show' : ''}`}>
      <div className="brand">
        <div className="brand-mark">
          <Leaf size={21} />
        </div>
        <div>
          <b>CirengFlow</b>
          <small>INVOICE MANAGEMENT</small>
        </div>
        <button className="mobile-close" onClick={() => setMobile(false)}>
          <X />
        </button>
      </div>

      <div className="workspace-label">WORKSPACE</div>

      <nav>
        {nav.map(([label, Icon]) => (
          <button
            key={label}
            className={`nav-item ${page === label ? 'active' : ''}`}
            onClick={() => navigate(label)}
          >
            <Icon size={18} />
            <span>{label}</span>
            {label === 'Pengiriman Invoice' && <i className="nav-dot" />}
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="help-card">
          <div className="help-icon">
            <Leaf size={17} />
          </div>
          <b>Butuh bantuan?</b>
          <p>Pusat bantuan CirengFlow siap membantu.</p>
          <button onClick={() => toast('Pusat bantuan demo')}>
            Hubungi support <ArrowUpRight size={13} />
          </button>
        </div>

        <div className="profile">
          <div className="avatar">AR</div>
          <div>
            <b>Admin Rujak</b>
            <small>Administrator</small>
          </div>
          <button onClick={onLogout} title="Keluar">
            <LogOut size={17} />
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

