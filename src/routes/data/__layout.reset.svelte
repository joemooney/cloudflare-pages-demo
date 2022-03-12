<script>
import Title from "$lib/title.svelte";
import '../../styles/global.css'
</script>


<header>
    <nav>
        <Title title="Data"/>
        <div class="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/data">Index</a>
        </div>
    </nav>
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
        text-align: center;
        background: rgba(8,3,1,0.3);
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
    .links {
        margin-left: auto;
    }
    a {
        margin-left: 10px;
    }
    nav {
        display: flex;
        align-items: center;
        max-width: 960px;
        margin: 0px auto;
    }
</style>