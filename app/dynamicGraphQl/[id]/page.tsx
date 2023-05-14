import { getDynamicGraphql } from '@/lib/graphql'

export default async function Page({ params }: { params: { id: string }}) {
    const [GRAPHQL] = await Promise.all([getDynamicGraphql(params.id)])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="border border-blue-600">{GRAPHQL.data.now}</div>
        </main>
    )
}

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
  