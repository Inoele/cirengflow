import { ArrowUpRight } from 'lucide-react'
import { money } from '../utils/helpers'
import Heading from './ui/Heading'

function Transaksi({
  customers, products, customerName, setCustomerName,
  productName, setProductName, qty, setQty,
  currentProduct, total, createTransaction,
}) {
  return (
    <>
      <Heading title="Buat Transaksi" desc="Catat pesanan baru untuk membuat invoice digital." />

      <div className="form-layout">
        <section className="panel form-panel">
          <h3>Informasi Pesanan</h3>

          <label>Pilih pelanggan</label>
          <select value={customerName} onChange={(e) => setCustomerName(e.target.value)}>
            {customers.map((c) => (
              <option key={c.id}>{c.name}</option>
            ))}
          </select>

          <label>Pilih produk</label>
          <select value={productName} onChange={(e) => setProductName(e.target.value)}>
            {products.map((p) => (
              <option key={p.id}>{p.name}</option>
            ))}
          </select>

          <label>Jumlah produk</label>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <label>Catatan pesanan (opsional)</label>
          <input placeholder="Contoh: tanpa cabai" />

          <button className="primary" onClick={createTransaction}>
            Simpan & Buat Invoice <ArrowUpRight size={16} />
          </button>
        </section>

        <section className="panel summary-panel">
          <div className="eyebrow">RINGKASAN PESANAN</div>
          <h3>{customerName}</h3>
          <p>{productName}</p>
          <div className="summary-row">
            <span>Harga satuan</span>
            <b>{money(currentProduct.price)}</b>
          </div>
          <div className="summary-row">
            <span>Jumlah</span>
            <b>{qty} pcs</b>
          </div>
          <div className="summary-row total-row">
            <span>Total tagihan</span>
            <strong>{money(total)}</strong>
          </div>
          <small>Invoice akan dibuat dengan status Belum Lunas.</small>
        </section>
      </div>
    </>
  )
}

export default Transaksi

