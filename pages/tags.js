import Container from '@/components/Container'
import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import Link from 'next/link'

export default function Tags ({ tags, posts }) {
  return <Container>
        <ul className='flex'>
            {
                Object.keys(tags).map(tag => (
                    <li key={tag} style={{ marginRight: '8px' }}> <Link href={`/tag/${tag}`}>{`${tag}(${tags[tag]})`}</Link></li>
                ))
            }
      </ul>
  </Container>
}

export async function getStaticProps ({ params }) {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags
    },
    revalidate: 1
  }
}
