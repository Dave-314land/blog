import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/posts', (c) => {
  const posts = [
    {
      id: 1,
      title: 'First post title',
      tags: ['tag1, tag2', 'tag3'],
      author: 'test author',
      body: 'first body',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Second post title',
      tags: ['tag1, tag2'],
      author: 'test author',
      body: 'second body',
      date: new Date(),
    }
  ]
  return c.json({posts})
})

app.get('/posts/:postId', (c) => {
  const postId = Number(c.req.param('postId'))
  const posts = [
    {
      id: 1,
      title: 'First post title',
      tags: ['tag1, tag2', 'tag3'],
      author: 'test author',
      body: 'first body',
      date: new Date(),
    },
    {
      id: 2,
      title: 'Second post title',
      tags: ['tag1, tag2', 'tag3'],
      author: 'test author',
      body: 'first body',
      date: new Date(),
    }
  ]
  const post = posts.find(post => post.id == postId)
  return c.json(`post: ${JSON.stringify(post)}`)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
