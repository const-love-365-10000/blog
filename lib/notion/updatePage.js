import axios from 'axios'
const token = process.env.NOTION_TOKEN

export async function addReaderNumber (pageId, num = 1) {
  if (!pageId) {
    throw new Error('pageId is not found')
  }
  const headers = {
    accept: 'application/json',
    'Notion-Version': '2022-06-28',
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`
  }
  const url = 'https://api.notion.com/v1/pages/' + pageId

  const res = await axios.get(url, {
    withCredentials: true,
    headers
  })

  const number = res.data.properties?.readerNumber?.number || 0
  return await axios.patch(url, {
    properties: {
      readerNumber: {
        type: 'number',
        number: number + num
      }
    }
  }, {
    headers
  })
}
