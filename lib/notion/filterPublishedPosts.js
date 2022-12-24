// import BLOG from '@/blog.config'
const current = new Date()
const tomorrow = new Date(current)
tomorrow.setDate(tomorrow.getDate() + 1)
tomorrow.setHours(0, 0, 0, 0)

export default function filterPublishedPosts ({ posts, includePages }) {
  if (!posts || !posts.length) return []
  const publishedPosts = posts
    .filter(post => {
      // 默认是文章
      if (post?.type == null) {
        post.type = ['Post']
      }
      return includePages
        ? post?.type?.[0] === 'Post' || post?.type?.[0] === 'Page'
        : post?.type?.[0] === 'Post'
    }
    )
    .filter(post => {
      const postDate = new Date(
        post?.date?.start_date || post.createdTime
      )
      // 默认将title作为路径
      if (!post.slug) {
        post.slug = post.title
      }
      // 默认是published状态
      if (post?.status == null) {
        post.status = ['Published']
      }

      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        postDate < tomorrow
      )
    })
  return publishedPosts
}
