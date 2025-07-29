const views = [
  { name: 'Home', path: '/' },
  { name: 'Hooks Demo', path: '/hooks' },
  { name: 'Data Fetching', path: '/data-fetching' },
  { name: 'Form Example', path: '/form' },
  { name: 'Table View', path: '/table-view' },
  { name: 'Configurable Form', path: '/configurable-form' },
  { name: 'Draggable Grid Form', path: '/draggable-grid-form' },
  { name: 'About', path: '/about' },
  { name: 'Resizable Form', path: '/resizable-form' },
  // 你可以继续添加其它视图
]

const ViewsListPage = () => (
  <div>
    <h2>Views List</h2>
    <ul>
      {views.map((view) => (
        <li key={view.path}>
          <a href={view.path}>{view.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default ViewsListPage
