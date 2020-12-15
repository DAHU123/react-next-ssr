import React from "react";

function Posts({ post, id }) {
    return (
        <div>
            <p>Posts</p>
            <p>id：<span style={{color: 'red'}}>{id}</span></p>
            这个是从接口详情获取到的信息：{post}
        </div>
    )
}

// 此函数在构建时被调用
export async function getStaticPaths() {
    // 调用外部 API 获取博文列表
    const res = await fetch('https://mock.yonyoucloud.com/mock/16553/lili/get/static/props')
    const { posts } = await res.json()

    // 根据博文列表生成所有需要预渲染的路径，这一步是很重要的，这一点要格外注意的；
    const paths = posts.map((post) => `/posts/${post.id}`)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

// 在构建时也会被调用
export async function getStaticProps({ params }) {
    // params 包含此片博文的 `id` 信息。
    // 如果路由是 /posts/1，那么 params.id 就是 1
    const res = await fetch(`https://mock.yonyoucloud.com/mock/16553/lili/get/detail/${params.id}`)
    const { post } = await res.json()

    // 通过 props 参数向页面传递博文的数据
    return { props: { post, id: params.id } }
}

export default Posts
