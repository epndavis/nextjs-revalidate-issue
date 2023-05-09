export async function getData() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/London', {
        next: {
            tags: ['data'],
        },
    })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}
