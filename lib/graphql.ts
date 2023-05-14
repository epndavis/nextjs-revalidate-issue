import { cache } from 'react'

export const getGraphql = cache(async () => {
    const requestBody = {
        query: `{ now(id: "1") }`,
    }

    const res = await fetch('https://main--time-pav6zq.apollographos.net/graphql', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(requestBody),
        next: {
            tags: ['graphql'],
            revalidate: 30,
        },
    })

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
})