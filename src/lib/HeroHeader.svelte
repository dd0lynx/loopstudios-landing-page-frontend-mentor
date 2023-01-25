<script>
    import logo from '../assets/logo.svg'
    import hamburger from '../assets/icon-hamburger.svg'
    import close from '../assets/icon-close.svg'

    export let mode
    let opened = false

    $: {if (mode == 'desktop') {
        opened = false
    }}

    function menuOpen() {
        opened = true
    }
    function menuClose() {
        opened = false
    }
</script>

<img src="./img/{mode}/image-hero.jpg" alt="" class="hero-img">
<div class="hero-content">
    <nav class="topnav">
        <img src="{logo}" alt="Loopstudios Logo">
        {#if mode == 'desktop' || opened}
            <ul class="nav-links {opened ? 'opened' : ''}">
                <li><a href="/">About</a></li>
                <li><a href="/">Careers</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Support</a></li>
            </ul>
        {/if}    
        {#if mode == 'mobile'}
            <div class="menu-btn {opened ? 'hidden' : ''}" on:click={menuOpen}>
                <img src="{hamburger}" alt="">
            </div>
            <div class="close-menu-btn {opened ? '' : 'hidden'}" on:click={menuClose}>
                <img src="{close}" alt="">
            </div>
        {/if}
        
    </nav>
    <div class="hero-tagline">
        <h1>Immersive experiences that deliver</h1>
    </div>
</div>

<style>
    .hero-img {
        position: relative;
        width: 100vw;
    }
    .hero-content {
        position: absolute;
        top: 2rem;
        left: 0;
        right: 0;
        bottom: 0;

        margin: 0 var(--sides-mobile);
    }
    .topnav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .topnav *{
        z-index: 2;
    }
    .nav-links {
        display: none;
        list-style: none;
    }
    .opened {
        position: fixed;
        left:0;
        top: 0;

        display: flex;
        flex-flow: column;
        gap: 2rem;
        width: 100vw;
        height: 100vh;
        z-index: 1;

        background-color: black;
        padding: 50% var(--sides-mobile);
    }
    .opened a {
        font-family: Josefin Sans;
        font-weight: 300;
        font-size: 2rem;
        text-transform: uppercase;
    }
    .menu-btn {
        display: block;
    }
    .hero-tagline {
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        
        color: var(--White);
        border: solid;
    }
    .hero-tagline h1 {
        font-size: 11vw;
        line-height: 11vw;
        padding: 2vw;
    }
    @media screen and (min-width:700px) {
        .hero-content {
            margin: 0 var(--sides-desktop);
        }
        .hero-tagline {
            position: absolute;
            width: 50vw;
        }
        .hero-tagline h1 {
            font-size: 5.5vw;
            line-height: 5.5vw;
            padding: 2vw;
        }

        .menu-btn {
            display: none;
        }
        .nav-links {
            display: flex;
            column-gap: 2rem;
        }
    }
</style>