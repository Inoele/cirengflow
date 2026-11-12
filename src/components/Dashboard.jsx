import {
  Wallet, CheckCircle2, Clock3, Users, Plus,
  ShoppingCart, ReceiptText, Send, TrendingUp, ArrowUpRight,
} from 'lucide-react'
import { money } from '../utils/helpers'
import Stat from './ui/Stat'
import Quick from './ui/Quick'
import TransactionTable from './ui/TransactionTable'

function Dashboard({ stats, transactions, customers, setPage, setSelected }) {
  return (
    <>
      <div className="page-heading">
        <div>
          <div className="eyebrow">TUESDAY, 03 NOVEMBER 2026</div>
          <h1>
            Selamat datang, Admin! <span className="wave">✦</span>
          </h1>
          <p>Berikut ringkasan aktivitas bisnis Rujak Cireng hari ini.</p>
        </div>
        <button className="primary" onClick={() => setPage('Transaksi')}>
          <Plus size={17} /> Buat Transaksi
        </button>
      </div>

      <div className="stat-grid">
        <Stat icon={Wallet} label="Total Penjualan" value={money(stats.sales)} trend="+12,8%" note="vs bulan lalu" />
        <Stat icon={CheckCircle2} label="Sudah Dibayar" value={money(stats.paid)} trend="Lunas" note={`${transactions.filter((t) => t.status === 'Lunas').length} transaksi`} />
        <Stat icon={Clock3} label="Belum Dibayar" value={money(stats.unpaid)} trend="Perlu ditagih" note={`${transactions.filter((t) => t.status !== 'Lunas').length} invoice`} />
        <Stat icon={Users} label="Total Pelanggan" value={customers.length} trend="+2 baru" note="pelanggan terdaftar" />
      </div>

      <div className="dashboard-grid">
        <section className="panel sales-panel">
          <div className="panel-head">
            <div>
              <h3>Ringkasan Penjualan</h3>
              <p>Performa transaksi usaha Anda</p>
            </div>
            <select>
              <option>7 hari terakhir</option>
              <option>Bulan ini</option>
            </select>
          </div>
          <div className="sales-total">
            {money(stats.sales)}{' '}
            <span>
              <TrendingUp size={15} /> 8,4%
            </span>
          </div>
          <div className="chart">
            <div className="chart-y">
              <span>500k</span>
              <span>300k</span>
              <span>100k</span>
              <span>0</span>
            </div>
            <div className="chart-area">
              <div className="gridline" />
              <div className="gridline" />
              <div className="gridline" />
              <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#8bc99b" stopOpacity=".35" />
                    <stop offset="1" stopColor="#8bc99b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 145 C45 130 55 90 105 105 S170 135 205 88 S275 105 310 67 S370 90 405 53 S465 80 500 42 S555 52 600 18 L600 180 L0 180Z"
                  fill="url(#fill)"
                />
                <path
                  d="M0 145 C45 130 55 90 105 105 S170 135 205 88 S275 105 310 67 S370 90 405 53 S465 80 500 42 S555 52 600 18"
                  fill="none"
                  stroke="#2e7650"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              <div className="chart-x">
                <span>Sen</span>
                <span>Sel</span>
                <span>Rab</span>
                <span>Kam</span>
                <span>Jum</span>
                <span>Sab</span>
                <span>Min</span>
              </div>
            </div>
          </div>
        </section>

        <section className="panel quick-panel">
          <div className="panel-head">
            <div>
              <h3>Aksi Cepat</h3>
              <p>Mulai pekerjaan Anda</p>
            </div>
          </div>
          <Quick icon={ShoppingCart} title="Buat transaksi" desc="Catat pesanan pelanggan" onClick={() => setPage('Transaksi')} />
          <Quick icon={ReceiptText} title="Buat invoice" desc="Siapkan tagihan digital" onClick={() => setPage('Invoice Digital')} />
          <Quick icon={Users} title="Tambah pelanggan" desc="Simpan data pelanggan" onClick={() => setPage('Data Pelanggan')} />
          <Quick icon={Send} title="Kirim invoice" desc="Bagikan melalui WhatsApp" onClick={() => setPage('Pengiriman Invoice')} />
        </section>
      </div>

      <section className="panel table-panel">
        <div className="panel-head">
          <div>
            <h3>Transaksi Terbaru</h3>
            <p>Pantau pesanan dan status pembayaran</p>
          </div>
          <button className="text-btn" onClick={() => setPage('Riwayat Transaksi')}>
            Lihat semua <ArrowUpRight size={14} />
          </button>
        </div>
        <TransactionTable
          rows={transactions.slice(0, 4)}
          onSelect={(t) => {
            setSelected(t)
            setPage('Invoice Digital')
          }}
        />
      </section>
    </>
  )
}

export default Dashboard

