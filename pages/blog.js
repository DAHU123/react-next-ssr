// TODO: 需要获取 `posts`（通过调用 API ）
//       在此页面被预渲染之前
function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>{post.name}</li>
      ))}
    </ul>
  )
}

// 此函数在构建时被调用
export async function getStaticProps() {
  // 调用外部 API 获取博文列表
  const res = await fetch(
    'https://mock.yonyoucloud.com/mock/16553/lili/get/static/props',
  )
  const { posts } = await res.json()
  // 通过返回 { props: posts } 对象，Blog 模块
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts,
    },
  }
}

export default Blog
