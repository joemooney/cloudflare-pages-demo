<script context="module">
    export async function load({ fetch, params }) {
        // id from the route [id].svelete
        const id = params.id;
        console.log("fetching data for id", id);
        console.log("Fetching data for id", id);
        // without backticks it is plain text
        // with backtick it is template variable and ${id} gets substituted
        // const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        // const datum = await res.json();
        const res = await fetch(`/data/${id}.json`);
        // the braces are necessary to destructure the json into the inner contents
        const { datum } = await res.json();
        if (res.ok) {
            return {
                props: {
                    datum
                }
            }
        }
        // redirecting in case of not found
        return {
            status: 301, // redirect status
            redirect: "/data"
        }
    }
</script>
<script>
    export let datum;
</script>

<div class="datum">
    <h2>{datum.title}</h2>
    <p>{datum.body}</p>
</div>

<style>
    .datum {
        margin-top: 40px;
        padding: 10px;
        border: 1px dotted rgba(255,255,255,0.2);
    }
</style>
