import { Eye } from 'lucide-react'
import { money } from '../../utils/helpers'

function TransactionTable({ rows, onSelect }) {
  return (
    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th>No. Invoice</th>
            <th>Pelanggan</th>
            <th>Tanggal</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((t) => (
            <tr key={t.id}>
              <td>
                <b className="invoice-id">{t.id}</b>
              </td>
              <td>{t.customer}</td>
              <td>{t.date}</td>
              <td>
                <b>{money(t.total)}</b>
              </td>
              <td>
                <span className={`status ${t.status === 'Lunas' ? 'paid' : 'unpaid'}`}>
                  <i />
                  {t.status}
                </span>
              </td>
              <td>
                <button className="row-action" onClick={() => onSelect(t)}>
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!rows.length && <div className="empty">Data tidak ditemukan.</div>}
    </div>
  )
}

export default TransactionTable

