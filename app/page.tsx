import { getData } from '@/lib/api'
import { getDynamicGraphql } from '@/lib/graphql'
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const API = await getData();

  return { title: API.datetime };
}

export default async function Home() {
  const [API, GRAPHQL] = await Promise.all([getData(), getDynamicGraphql('1')])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-red-600">{API.datetime}</div>
      <div className="border border-blue-600">{GRAPHQL.data.now}</div>
    </main>
  )
}
