import BLOG from '@/blog.config'
// import Vercel from '@/components/Vercel'

const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <footer
      className={`footer flex flex-col items-center justify-center mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
        <div className="beian flex">
          <a href="http://www.beian.miit.gov.cn" rel="noopener external nofollow noreferrer" target="_blank" className="exturl" title="">湘 ICP 备 20004217 号 - 1 </a>
          <span className='flex'>
          {
              // eslint-disable-next-line @next/next/no-img-element
                <img className='beian-logo' src="https://s2.ax1x.com/2020/03/10/8iewdO.png" alt='备案' />
              }
                  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060402001711" rel="noopener external nofollow noreferrer" target="_blank" className="exturl" title="">粤公网安备 44060402001711 号 </a>
          </span>
        </div>
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
            <div className='inline-block h-4 w-4 mr-2'><span className='mr-1 foot-love'>❤️</span></div>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          {/* <Vercel /> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
