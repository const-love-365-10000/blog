import Link from "next/link";
import BLOG from "@/blog.config";
import formatDate from "@/lib/formatDate";

const BlogPost = ({ post }) => {
  console.log(post);
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <a>
        <article
          key={post.id}
          className="mb-6 md:mb-8 flex flex-col lg:flex-row justify-between md:items-baseline "
        >
          <header className="flex flex-1 mb-2 flex-col justify-between md:flex-row md:items-baseline">
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
          <main className="" style={{ flex: 3 }}>
            {/* <span>
              阅读人数： {post.readerNumber}
            </span> */}
            <h2
              className="article-title text-xl lg:text-2xl font-semibold mb-2 cursor-pointer text-black dark:text-gray-100"
              style={{ width: "fit-content" }}
            >
              {post.title}
            </h2>
            <section className="mb-2">
              {post.tags.map((tag) => (
                <Link href={"/tag/" + tag} key={tag}>
                  <a className="mr-3 text-sm font-medium  text-blue-500 hover:text-blue-600 dark:text-sky-400 dark:hover:text-sky-300 hover:text-shadow transition duration-300 md:text-base">
                    {"#" + tag}
                  </a>
                </Link>
              ))}
            </section>
            <p className="leading-8 text-base text-gray-600 dark:text-gray-300">
              {post.summary}
            </p>
          </main>
        </article>
      </a>
    </Link>
  );
};

export default BlogPost;
