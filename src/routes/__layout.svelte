<script>
import Title from "$lib/title.svelte";
import '../styles/global.css'
</script>

<header>
    <Title title="Data"/>
</header>
<main>
    <!-- page content -->
    <slot></slot>
</main>
<footer>
    <p></p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>