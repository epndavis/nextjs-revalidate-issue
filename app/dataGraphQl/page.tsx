import { cache } from 'react'

const getGraphql = cache(async () => {
  const requestBody = {
    query: `{ now(id: "2") }`,
  }

  const res = await fetch('https://main--time-pav6zq.apollographos.net/graphql', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(requestBody),
    next: {
      tags: ['graphql'],
      revalidate: 20,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
})

export default async function Home() {
  const [GRAPHQL, GRAPHQL2] = await Promise.all([getGraphql(), getGraphql()])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-blue-600">{GRAPHQL.data.now}</div>
      <div className="border border-green-600">{GRAPHQL2.data.now}</div>
    </main>
  )
}
