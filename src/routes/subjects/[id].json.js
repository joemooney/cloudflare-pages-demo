export async function get({ params }) {

    const subjects = [
        { id: 1, title: 'title 1', body: 'lorem ipsum' },
        { id: 2, title: 'title 2', body: 'lorem ipsum' },
        { id: 3, title: 'title 3', body: 'lorem ipsum' },
        { id: 4, title: 'title 4', body: 'lorem ipsum' },
        { id: 5, title: 'title 5', body: 'lorem ipsum' },
    ]

    const subject = subjects.find((s) => s.id == params.id)

    if (subject) {
        return {
            status: 200,
            body: { subject },
        }
    }
    return {
        status: 301,
        redirect: '/guides'
    }
    
}