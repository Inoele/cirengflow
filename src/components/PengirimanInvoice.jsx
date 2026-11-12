import { Send, CheckCircle2, MessageCircle } from 'lucide-react'
import Heading from './ui/Heading'

function PengirimanInvoice({ selected, setSelected, transactions, whatsapp }) {
  return (
    <>
      <Heading
        title="Pengiriman Invoice"
        desc="Siapkan tautan WhatsApp untuk membagikan invoice kepada pelanggan."
      />

      <section className="panel send-panel">
        <div className="send-illustration">
          <div className="send-icon">
            <Send size={34} />
          </div>
        </div>
        <div>
          <div className="eyebrow">WHATSAPP SHARE</div>
          <h2>Kirim invoice dengan mudah.</h2>
          <p>
            Pilih invoice yang ingin dibagikan. Sistem akan membuka WhatsApp
            dengan pesan yang sudah disiapkan. Anda tetap mengirim pesan dan
            melampirkan gambar secara manual.
          </p>
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
          <button className="whatsapp-btn" onClick={whatsapp}>
            <MessageCircle size={18} /> Lanjut ke WhatsApp
          </button>
        </div>
      </section>

      <div className="note-box">
        <CheckCircle2 size={18} />
        <span>
          <b>Kontrol tetap di tangan Anda.</b> Tidak ada pesan yang dikirim
          otomatis dan tidak ada nomor pelanggan yang dituju tanpa tindakan Anda.
        </span>
      </div>
    </>
  )
}

export default PengirimanInvoice

