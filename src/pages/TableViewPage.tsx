import styles from './TableViewPage.module.css'

const data = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 28 },
  { id: 3, name: 'Charlie', age: 22 },
]

const TableViewPage = () => (
  <div className={styles['table-container']}>
    <h2>Table View</h2>
    <table className={styles['table-view']}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export default TableViewPage
