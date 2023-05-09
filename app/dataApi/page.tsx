import { getData } from "@/lib/api"

export default async function Home() {
  const [API] = await Promise.all([getData()])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border border-red-600">{API.datetime}</div>
    </main>
  )
}
