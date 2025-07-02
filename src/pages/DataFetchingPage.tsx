// src/pages/DataFetchingPage.tsx
import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../api/postsApi'
import type { Post } from '../api/postsApi'

const DataFetchingPage = () => {
  const { data, error, isLoading, isFetching } = useQuery<Post[], Error>({
    queryKey: ['posts'], // 查询的唯一标识
    queryFn: getPosts, // 获取数据的函数
  })

  if (isLoading) {
    return <div>Loading posts...</div>
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>
  }

  return (
    <div>
      <h2>Data Fetching with TanStack Query</h2>
      {isFetching && <p>Updating in background...</p>}
      <ul>
        {data?.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DataFetchingPage
