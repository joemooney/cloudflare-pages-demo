<!-- this module context is preloaded on server -->
<!-- load is a special svelte function -->
<script context="module">
    export async function load({ fetch }) {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const subjects = await res.json();
        const res = await fetch('/subjects.json');
        const { subjects } = await res.json();
        // console.log(subjects)
        if (res.ok) {
            return {
                props: {
                    subjects
                }
            }
        }
        return {
            status: res.status,
            error: new Error("Could not fetch the subjects")
        }
    }
</script>
<script>
    export let subjects;
</script>
<div class='subjects'>
    <ul>
        {#each subjects as subject}
        <!-- with prefetch hovering over a link will trigger a prefetch -->
        <li><a sveltekit:prefetch href={`/subjects/${subject.id}`}>{subject.title}</a></li>
        {/each}
    </ul>
</div>