<script>

    let title = "Secret Door"
    let user = "anonymous"
    const updateTitle = () => {
        title = user + ", you have entered the Secret World!"
    }
    const updateName = () => {
        title = "Welcome to the Secret World, " + user
    }

</script>

<div class="index">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi assumenda consectetur asperiores totam omnis rerum nemo at. Laudantium aspernatur, maxime soluta sit ratione quasi voluptatem. Labore porro pariatur saepe!
</p>
<input bind:value={user} on:change={updateName}>
<p>
<button on:click={updateTitle}>Enter</button>
</p>

<a href="/subjects">Subjects</a>
<a href="/about">About</a>

</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px;
    }

</style>
