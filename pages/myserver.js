import React from 'react'

function Makeover({ posts = [] }) {
  return (
    <ul>
      {posts.map(post => (
        <li>
          <span style={{ color: 'red' }}>myserver.js</span>
          {post.name}
        </li>
      ))}
    </ul>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    'https://mock.yonyoucloud.com/mock/16553/lili/get/static/props',
  )
  const { posts } = await res.json()

  // Pass data to the page via props
  return {
    props: {
      posts,
    },
  }
}

export default Makeover
