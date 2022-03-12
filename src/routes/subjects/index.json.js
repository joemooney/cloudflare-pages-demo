// the fact the file is called .json.js indicates to svelte
// that this is for an API route

export async function get() {

    const subjects = [
        { id: 1, title: 'title 1', body: 'lorem ipsum' },
        { id: 2, title: 'title 2', body: 'lorem ipsum' },
        { id: 3, title: 'title 3', body: 'lorem ipsum' },
        { id: 4, title: 'title 4', body: 'lorem ipsum' },
        { id: 5, title: 'title 5', body: 'lorem ipsum' },
    ]

    return {
        status: 200,
        body: { subjects },
    }
    
}