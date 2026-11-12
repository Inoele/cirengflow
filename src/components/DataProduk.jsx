import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { money } from '../utils/helpers'
import Heading from './ui/Heading'
import SearchBox from './ui/SearchBox'
import Modal from './ui/Modal'

function DataProduk({ products, setProducts, toast }) {
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: '', price: '', stock: '' })

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )

  const handleAdd = () => {
    if (!form.name.trim()) return
    const newProduct = {
      id: `PRD-${String(products.length + 1).padStart(3, '0')}`,
      name: form.name.trim(),
      price: Number(form.price) || 15000,
      stock: Number(form.stock) || 0,
    }
    setProducts([newProduct, ...products])
    setForm({ name: '', price: '', stock: '' })
    setModalOpen(false)
    toast('Produk ditambahkan (dummy)')
  }

  return (
    <>
      <Heading
        title="Data Produk"
        desc="Atur katalog dan harga produk yang dijual."
        action={() => setModalOpen(true)}
        actionText="Tambah Produk"
      />

      <SearchBox query={query} setQuery={setQuery} />

      <section className="product-grid">
        {filtered.map((p) => (
          <div className="panel product-card" key={p.id}>
            <div className="product-art">
              <div className="food-circle">
                <Leaf size={34} />
              </div>
              <span>BEST SELLER</span>
            </div>
            <div className="product-info">
              <small>{p.id}</small>
              <h3>{p.name}</h3>
              <strong>{money(p.price)}</strong>
              <div className="stock">
                <span>Stok tersedia</span>
                <b>{p.stock} pcs</b>
              </div>
            </div>
          </div>
        ))}
      </section>
      {!filtered.length && <div className="empty">Produk tidak ditemukan.</div>}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Tambah Produk Baru">
        <div className="modal-form">
          <label>Nama produk *</label>
          <input
            placeholder="Masukkan nama produk"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoFocus
          />
          <label>Harga (Rp)</label>
          <input
            type="number"
            placeholder="Contoh: 15000"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
          <label>Stok awal</label>
          <input
            type="number"
            placeholder="Contoh: 50"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />
          <div className="modal-actions">
            <button className="secondary" onClick={() => setModalOpen(false)}>
              Batal
            </button>
            <button className="primary" onClick={handleAdd}>
              Simpan Produk
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default DataProduk

