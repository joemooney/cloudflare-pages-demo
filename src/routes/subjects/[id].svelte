<script context="module">
    export async function load({ fetch, params }) {
        // id from the route [id].svelete
        const id = params.id;
        console.log("fetching data for id", id);
        // without backticks it is plain text
        // with backtick it is template variable and ${id} gets substituted
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // const subject = await res.json();
        const res = await fetch(`/subjects/${id}`);
        const subject = await res.json();
        if (res.ok) {
            return {
                props: {
                    subject
                }
            }
        }
        // redirecting in case of not found
        return {
            status: 301, // redirect status
            redirect: "/subjects"
        }
    }
</script>
<script>
    export let subject;
</script>

<div class="subject">
    <h2>{subject.title}</h2>
    <p>{subject.body}</p>
</div>

<style>
    .subject {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>
