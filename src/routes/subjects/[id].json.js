export async function get({ params }) {

    console.log("get data for an id");
    console.log("loading data for id", params.id);

    const subjects = [
        { id: 1, title: 'title 1', body: 'lorem ipsum' },
        { id: 2, title: 'title 2', body: 'lorem ipsum' },
        { id: 3, title: 'title 3', body: 'lorem ipsum' },
        { id: 4, title: 'title 4', body: 'lorem ipsum' },
        { id: 5, title: 'title 5', body: 'lorem ipsum' },
    ]

    const subject = subjects.find((s) => s.id == params.id)

    if (subject) {
        console.log("found data for id", params.id);
        return {
            status: 200,
            body: { subject },
        }
    }
    console.log("did not find data for id", params.id);
    return {
        status: 301,
        redirect: '/subjects'
    }
    
}