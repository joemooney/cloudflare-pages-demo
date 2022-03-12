<script>
    export let title = "no title"
</script>

<div class="title">
    <img src="/snow.svg" alt="site logo">
    <h1>{title}</h1>
</div>

<style>
    .title {
        display: flex;
    }
    .title img {
        display: inline-block;
        color: black;
        /* colorize the svg */
        /* filter: invert(885) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%) */
    }
    .title h1 {
        margin-left:  10px;
    }
</style>