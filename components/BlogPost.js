import Link from 'next/link'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { useRouter } from 'next/router'

const BlogPost = ({ post }) => {
  console.log(post)

  const router = useRouter()

  function onClickTag (e, path) {
    e.stopPropagation()
    e.preventDefault()
    router.push(path)
  }

  return (
    (<Link href={`${BLOG.path}/${post.slug}`} passHref>

      <article
        key={post.id}
        className="mb-6 md:mb-8 flex flex-col lg:flex-row justify-between md:items-baseline "
      >
        <header className="flex mb-2 flex-col justify-between md:flex-row md:items-baseline"
         style={{ flex: 4 }}>
          <time
            dateTime={formatDate(
              post?.date?.start_date || post.createdTime,
              BLOG.lang
            )}
            className="flex-shrink-0 leading-6 text-base text-gray-600 dark:text-gray-400"
          >
            {formatDate(
              post?.date?.start_date || post.createdTime,
              BLOG.lang
            )}
          </time>
        </header>
        <main style={{ flex: 8 }}>
          {/* <span>
            阅读人数： {post.readerNumber}
          </span> */}
          <h2
            className="article-title text-xl lg:text-2xl font-semibold mb-2 cursor-pointer text-black dark:text-gray-100"
          >
            {post.title}
          </h2>
          <section className="mb-2 lg:mb-4">
            {post.tags.map((tag) => (
              (<span
                onClick={(e) => onClickTag(e, '/tag/' + tag)}
                key={tag}
                className="mr-3 text-sm font-medium  text-blue-500 hover:text-blue-600 dark:text-sky-400 dark:hover:text-sky-300 hover:text-shadow transition duration-300 md:text-base">

                {'#' + tag}

              </span>)
            ))}
          </section>
          <p className="leading-8 text-sm font-light md:font-medium md:text-base text-gray-700 dark:text-gray-200  font-mono line-clamp">
            {post.summary}
          </p>
        </main>
      </article>

    </Link>)
  )
}

export default BlogPost
