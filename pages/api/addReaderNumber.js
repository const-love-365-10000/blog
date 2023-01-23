import { addReaderNumber } from '@/lib/notion/updatePage'
import cron from 'node-cron'

let readerMap = {}

// 每天0：30执行任务
cron.schedule('30 0 * * *', () => {
  console.log('执行定时任务')
  console.log(readerMap)
  for (const id of Object.keys(readerMap)) {
    addReaderNumber(id, readerMap[id])
  }
  readerMap = {}
})

export default function handler (req, res) {
  if (req.query.pageId) {
    readerMap[req.query.pageId] = (readerMap[req.query.pageId] || 0) + 1
  }

  res.status(200).setHeader('cache-control', 'no-store').send('true')
}
