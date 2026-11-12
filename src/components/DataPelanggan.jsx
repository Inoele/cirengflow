import { useState } from 'react'
import Heading from './ui/Heading'
import SearchBox from './ui/SearchBox'
import Modal from './ui/Modal'

function DataPelanggan({ customers, setCustomers, toast }) {
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', address: '' })

  const filtered = customers.filter((c) =>
    (c.name + c.phone).toLowerCase().includes(query.toLowerCase())
  )

  const handleAdd = () => {
    if (!form.name.trim()) return
    const newCustomer = {
      id: `PLG-${String(customers.length + 1).padStart(3, '0')}`,
      name: form.name.trim(),
      phone: form.phone.trim() || 'Belum diisi',
      address: form.address.trim() || 'Belum diisi',
      joined: '03 Nov 2026',
    }
    setCustomers([newCustomer, ...customers])
    setForm({ name: '', phone: '', address: '' })
    setModalOpen(false)
    toast('Pelanggan ditambahkan (dummy)')
  }

  return (
    <>
      <Heading
        title="Data Pelanggan"
        desc="Kelola informasi pelanggan Rujak Cireng."
        action={() => setModalOpen(true)}
        actionText="Tambah Pelanggan"
      />

      <SearchBox query={query} setQuery={setQuery} />

      <section className="panel table-panel">
        <div className="panel-head">
          <h3>
            Semua Pelanggan <span className="count">{customers.length}</span>
          </h3>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID Pelanggan</th>
                <th>Nama</th>
                <th>No. WhatsApp</th>
                <th>Alamat</th>
                <th>Bergabung</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id}>
                  <td className="muted">{c.id}</td>
                  <td><b>{c.name}</b></td>
                  <td>{c.phone}</td>
                  <td>{c.address}</td>
                  <td>{c.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!filtered.length && <div className="empty">Data tidak ditemukan.</div>}
        </div>
      </section>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Tambah Pelanggan Baru">
        <div className="modal-form">
          <label>Nama pelanggan *</label>
          <input
            placeholder="Masukkan nama pelanggan"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoFocus
          />
          <label>No. WhatsApp</label>
          <input
            placeholder="Contoh: 081234567890"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <label>Alamat</label>
          <input
            placeholder="Masukkan alamat"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
          <div className="modal-actions">
            <button className="secondary" onClick={() => setModalOpen(false)}>
              Batal
            </button>
            <button className="primary" onClick={handleAdd}>
              Simpan Pelanggan
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DataPelanggan

