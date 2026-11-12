import { Leaf, CheckCircle2, Download, MessageCircle, FileImage } from 'lucide-react'
import { money } from '../utils/helpers'
import Heading from './ui/Heading'

function InvoiceDigital({
  selected, setSelected, transactions,
  invoiceRef, downloadPng, downloadJpg, whatsapp,
}) {
  return (
    <>
      <Heading title="Invoice Digital" desc="Pratinjau struk digital dan unduh dalam format gambar." />

      <div className="invoice-work">
        <section className="invoice-paper" ref={invoiceRef}>
          <div className="invoice-brand">
            <div className="brand-mark">
              <Leaf size={21} />
            </div>
            <div>
              <b>RUJAK CIRENG</b>
              <small>FRESH • HOMEMADE • DELICIOUS</small>
            </div>
          </div>

          <div className="invoice-title">
            <span>INVOICE DIGITAL</span>
            <h2>{selected.id}</h2>
            <small>03 November 2026</small>
          </div>

          <div className="invoice-divider" />

          <div className="bill-to">
            <small>DITAGIHKAN KEPADA</small>
            <b>{selected.customer}</b>
            <span>Terima kasih telah memesan!</span>
          </div>

          <div className="invoice-items">
            <div className="item-head">
              <span>DESKRIPSI</span>
              <span>JUMLAH</span>
            </div>
            <div className="item-row">
              <span>{selected.items}</span>
              <b>{money(selected.total)}</b>
            </div>
          </div>

          <div className="invoice-total">
            <span>Total Tagihan</span>
            <strong>{money(selected.total)}</strong>
          </div>

          <div className="payment-stamp">
            <CheckCircle2 size={16} />
            {selected.status.toUpperCase()}
          </div>

          <div className="invoice-footer">
            <b>Terima kasih atas pesanan Anda!</b>
            <span>Rujak Cireng · Cikarang, Indonesia</span>
            <small>Struk ini diterbitkan secara digital.</small>
          </div>
        </section>

        <section className="panel invoice-actions">
          <div>
            <div className="eyebrow">INVOICE TOOLS</div>
            <h3>Bagikan invoice</h3>
            <p>Pilih transaksi, unduh struk sebagai PNG, lalu bagikan melalui WhatsApp.</p>
          </div>

          <label>Pilih invoice</label>
          <select
            value={selected.id}
            onChange={(e) => setSelected(transactions.find((t) => t.id === e.target.value))}
          >
            {transactions.map((t) => (
              <option key={t.id} value={t.id}>
                {t.id} — {t.customer}
              </option>
            ))}
          </select>

          <button className="primary full" onClick={downloadPng}>
            <Download size={17} /> Unduh struk PNG
          </button>
          <button className="secondary-download full" onClick={downloadJpg}>
            <Download size={17} /> Unduh struk JPG
          </button>
          <button className="whatsapp-btn full" onClick={whatsapp}>
            <MessageCircle size={18} /> Buka WhatsApp
          </button>

          <div className="hint">
            <FileImage size={17} />
            <span>
              Setelah WhatsApp terbuka, lampirkan file PNG yang sudah diunduh
              secara manual.
            </span>
          </div>
        </section>
      </div>
    </>
  )
}

export default InvoiceDigital

