import { Leaf, ArrowUpRight } from 'lucide-react'

function Login({ onLogin }) {
  return (
    <div className="login-shell">
      <div className="login-card">
        <div className="brand-mark">
          <Leaf size={24} />
        </div>
        <div className="eyebrow">RUJAK CIRENG • DIGITAL WORKSPACE</div>
        <h1>
          Tagihan jadi lebih <span>praktis.</span>
        </h1>
        <p>
          Kelola transaksi, buat invoice, dan bagikan struk digital ke pelanggan
          dalam satu tempat.
        </p>
        <label>Email / Username</label>
        <input placeholder="admin@rujakcireng.id" defaultValue="admin@rujakcireng.id" />
        <label>Password</label>
        <input placeholder="Masukkan password" type="password" defaultValue="cireng123" />
        <button className="primary full" onClick={onLogin}>
          Masuk ke Dashboard <ArrowUpRight size={17} />
        </button>
        <small>Demo prototype · gunakan tombol masuk untuk melihat aplikasi</small>
      </div>

      <div className="login-art">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="art-copy">
          <span>SMART BILLING FOR SMALL BUSINESS</span>
          <h2>
            Freshly made.
            <br />
            Digitally managed.
          </h2>
          <p>Lebih rapi mengelola pesanan, lebih mudah menagih pembayaran.</p>
        </div>
        <div className="floating-invoice">
          <div className="mini-brand">
            <Leaf size={15} /> CirengFlow
          </div>
          <b>INVOICE #001</b>
          <strong>Rp45.000</strong>
          <small>Payment received</small>
          <div className="mini-line" />
        </div>
      </div>
    </div>
  )
}

export default Login

