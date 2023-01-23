import BLOG from '@/blog.config'
// import Vercel from '@/components/Vercel'

const Footer = ({ fullWidth, posts }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since

  // 访问总人数
  let readerCount
  try {
    readerCount = posts.reduce((prev, cur) => prev + parseInt(cur.readerNumber || 0), 0)
  } catch (err) { }

  return (
    <footer
      className={`footer flex flex-col items-center justify-center mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all whitespace-nowrap ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="beian flex text-xs md:text-base">
        <a href="http://www.beian.miit.gov.cn" rel="noopener external nofollow noreferrer" target="_blank" className="exturl" title="">湘 ICP 备 20004217 号 - 1 </a>
        <div className='h-5 w-px bg-gray-400 rounded-sm mx-2'></div>
        <span className='flex'>
        {
            // eslint-disable-next-line @next/next/no-img-element
              <img className='beian-logo' src="https://s2.ax1x.com/2020/03/10/8iewdO.png" alt='备案' />
            }
                <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060402001711" rel="noopener external nofollow noreferrer" target="_blank" className="exturl" title="">粤公网安备 44060402001711 号 </a>
        </span>
      </div>
      <div className="my-2 leading-6 text-base">
        <div className='flex justify-center'>
          {(readerCount && posts) && <>
            <span>👁️‍🗨️{readerCount}</span>
            <span className='ml-2'>📰{ posts.length}</span>
          </>}
        </div>
        <div className="flex align-baseline justify-between flex-wrap">
          <div>
            <div className='inline-block h-4 w-4 mr-2'><span className='mr-2 foot-love'>❤️</span></div>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </div>
          {/* <Vercel /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
