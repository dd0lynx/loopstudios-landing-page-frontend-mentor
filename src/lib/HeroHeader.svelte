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
            <img src="./{logo}" alt="Loopstudios Logo" class="logo">
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
                <button class="menu-btn {opened ? 'hidden' : ''}" on:click={menuOpen}>
                    <img src="./{hamburger}" alt="">
                </button>
                <button class="close-menu-btn {opened ? '' : 'hidden'}" on:click={menuClose}>
                    <img src="./{close}" alt="">
                </button>
            {/if}
            
        </nav>
        <div class="hero-tagline">
            <h1>Immersive experiences that deliver</h1>
        </div>
    </div>


<style>
    
    .hero-img {
        
        width: 100%;
    }
    .hero-content {
        position: absolute;
        top: 4rem;
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
    .topnav button {
        padding: 0;
        border: none;
    }
    .topnav button:hover {
        background: none;
    }
    .topnav .logo {
        width: 45%;
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
        border: solid .15rem;
    }
    .hero-tagline h1 {
        font-size: 11vw;
        line-height: 11vw;
        padding: 6vw;
    }
    @media screen and (min-width:700px) {
        .hero-img {
            filter: brightness(70%);
            -webkit-filter: brightness(70%);
        }
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

        .topnav .logo {
            width: auto;
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