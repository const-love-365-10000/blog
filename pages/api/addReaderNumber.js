import { addReaderNumber } from '@/lib/notion/updatePage'
import cron from 'node-cron'

let readerMap = {}

// 定时任务
cron.schedule('05 * * * *', () => {
  console.log('执行定时任务', readerMap)
  const arr = Object.keys(readerMap).map((id) => addReaderNumber(id, readerMap[id]))
  Promise.all(arr.map(fn => fn())).then(res => {
    console.log(9, res)
  }).catch((err) => {
    console.error(8, err)
  })
  readerMap = {}
})

export default function handler (req, res) {
  console.log('readerMap', readerMap)
  if (req.query.pageId) {
    readerMap[req.query.pageId] = (readerMap[req.query.pageId] || 0) + 1
  }

  res.status(200).setHeader('cache-control', 'no-store').send('true')
}
