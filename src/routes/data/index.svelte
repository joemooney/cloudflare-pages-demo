<!-- this module context is preloaded on server -->
<!-- load is a special svelte function -->
<script context="module">
    export async function load({ fetch }) {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const subjects = await res.json();
        const res = await fetch('/data.json');
        const { data } = await res.json();
        // console.log(subjects)
        if (res.ok) {
            return {
                props: {
                    data
                }
            }
        }
        return {
            status: res.data,
            error: new Error("Could not fetch data")
        }
    }
</script>
<script>
    export let data;
</script>
<div class='data'>
    <ul>
        {#each data as datum}
        <!-- with prefetch hovering over a link will trigger a prefetch -->
        <li><a sveltekit:prefetch href={`/data/${datum.id}`}>{datum.title}</a></li>
        {/each}
    </ul>
</div>