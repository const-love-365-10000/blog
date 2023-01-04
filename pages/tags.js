import Container from '@/components/Container'
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Link from 'next/link'

export default function Tags ({ tags, posts, categories }) {
  return <Container>
        {/* <ul className='flex flex-wrap'>
            {
                Object.keys(tags).map(tag => (
                    <li key={tag} className='text-black dark:text-gray-100 cursor-pointer' style={{ margin: '8px' }}> <Link href={`/tag/${tag}`}>{`${tag}(${tags[tag]})`}</Link></li>
                ))
            }
      </ul> */}
    {/* <div className='grid grid-cols-2'>
      <div>
      {Object.keys(tags).map(tag => (
                    <li key={tag} className='text-black dark:text-gray-100 cursor-pointer' style={{ margin: '8px' }}> <Link href={`/tag/${tag}`}>{`${tag}(${tags[tag]})`}</Link></li>
      ))}
      </div>
    </div> */}
    <div className='flex flex-wrap justify-between'>
    {Object.keys(categories).map(tag => (
      <div key={tag} className='w-1/2 md:w-2/5 h-full my-1 text-black dark:text-gray-100' >
        <h3 className="text-2xl cursor-pointer"><Link href={`/tag/${tag}`}>{`${tag}(${tags[tag]})`}</Link></h3>
        <hr className='my-2'/>
        {
          categories[tag].map(post => (
            <div key={post.id} className="my-2 p-1 text-gray-800 cursor-pointer hover:bg-gray-100 ">
              <Link href={`/${post.slug}`} passHref>
                <span>{post.emoji && <span>{post.emoji}</span>}{post.title}</span>
              </Link>
            </div>
          ))
        }
        </div>
    ))}
    </div>
  </Container>
}

export async function getStaticProps ({ params }) {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  const categories = {}
  posts.forEach(post => {
    if (post.tags?.[0]) {
      const tag = post.tags[0]
      categories[tag] = Array.isArray(categories[tag]) ? [...categories[tag], post] : [post]
    }
  })

  return {
    props: {
      tags,
      posts,
      categories
    },
    revalidate: 1
  }
}
