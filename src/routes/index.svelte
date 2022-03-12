<script>

    let title = "Data"
    let user = ""
    const updateTitle = () => {
        title = user + " welcome"
    }
    const updateName = () => {
        title = user + "Data"
    }

</script>

<div class="index">

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi assumenda consectetur asperiores totam omnis rerum nemo at. Laudantium aspernatur, maxime soluta sit ratione quasi voluptatem. Labore porro pariatur saepe!
</p>
<button on:click={updateTitle}>Enter Id</button>
<input bind:value={user} on:change={updateName}>
<p>
</p>

<a href="/data">Data</a>
<a href="/about">About</a>

</div>

<style>
    .index {
        text-align: center;
        display: block;
        margin: 20px;
    }

</style>
