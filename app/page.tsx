import { getData } from '@/lib/api'
import { getGraphql } from '@/lib/graphql'

export default async function Home() {
  const [API, GRAPHQL, GRAPHQL2] = await Promise.all([getData(), getGraphql(), getGraphql()])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-red-600">{API.datetime}</div>
      <div className="border border-blue-600">{GRAPHQL.data.now}</div>
      <div className="border border-green-600">{GRAPHQL2.data.now}</div>
    </main>
  )
}
