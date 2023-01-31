<script>
    import logo from './assets/logo.svg'
    import facebook from './assets/icon-facebook.svg'
    import instagram from './assets/icon-instagram.svg'
    import pinterest from './assets/icon-pinterest.svg'
    import twitter from './assets/icon-twitter.svg'

    import HeroComponent from './lib/HeroHeader.svelte'
    import Card from './lib/Creations.svelte'


    let mode = 'mobile'
    let w
    $: {
        if (w < 700) {
            mode = 'mobile'
        }
        else {
            mode = 'desktop'
        }
    }
</script>

<header bind:clientWidth={w}>
    <HeroComponent {mode}/> 
</header>

<main>
    <div class="about-grid">
        <img src="./img/{mode}/image-interactive.jpg" alt="">
        <div class="about-text">
            <h1>
                The leader in interactive VR
            </h1>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
        </div>
    </div>

    <div class="creation-grid">
        <h1>
            OUR CREATIONS
        </h1>
    
        <button>
            See all
        </button>
    
        <div class="cards">
            <Card {mode} text='DEEP<br>EARTH' img='image-deep-earth.jpg'/>
            <Card {mode} text='NIGHT<br>ARCADE' img='image-night-arcade.jpg'/>
            <Card {mode} text='SOCCER<br>TEAM VR' img='image-soccer-team.jpg'/>
            <Card {mode} text='THE<br>GRID' img='image-grid.jpg'/>
            <Card {mode} text='FROM UP<br>ABOVE VR' img='image-from-above.jpg'/>
            <Card {mode} text='POCKET<br>BOREALIS' img='image-pocket-borealis.jpg'/>
            <Card {mode} text='THE<br>CURIOSITY' img='image-curiosity.jpg'/>
            <Card {mode} text='MAKE IT<br>FISHEYE' img='image-fisheye.jpg'/>
        </div>
    </div>

</main>

<footer>

    <img class="logo" src="{logo}" alt="Loopstudios Logo">

    <nav class="botnav">
        <ul class="nav-links">
            <li><a href="/">About</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Support</a></li>
        </ul>
    </nav>

    <div class="socials">
        <a href="/"><img src="{facebook}" alt="Facebook icon"></a>
        <a href="/"><img src="{twitter}" alt="Twitter icon"></a>
        <a href="/"><img src="{pinterest}" alt="Pinterest icon"></a>
        <a href="/"><img src="{instagram}" alt="Instagram icon"></a>
    </div>

    <div class="copyright">
        <p>© 2021 Loopstudios. All rights reserved.</p>
        
    
        <div class="attribution">
            <p>Challenge by <a href="https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw">Frontend Mentor</a>.
            Coded by <a href="https://www.frontendmentor.io/profile/dd0lynx">Daniel Dowty</a>.</p>
        </div>
    </div>

</footer>

<style>
    header {
        position: relative;
    }

    main {
        display:grid;
        margin: 0 auto;
        /* width: min-content; */
        padding: 5rem 2rem;
        gap: 5rem
        /* margin: 0 var(--sides-mobile); */
    }

    .about-grid {
        display: grid;
        justify-items: center;
        gap: 3rem;
    }
    .about-grid img {
        width: 100%;
    }
    .about-text {
        display: grid;
        text-align: center;
        row-gap: 1.5rem;
        padding: 0 1rem;
        background-color: var(--White);
    }

    .creation-grid {
        display: grid;
        /* justify-content: center; */
        justify-items: center;
        grid-template-areas:
            "title"
            "cards"
            "button";
        row-gap: 3rem;
    }
    .creation-grid h1 {
        grid-area: title;
    }
    .creation-grid button {
        grid-area: button;
        /* place-self: center; */
    }
    .cards {
        grid-area: cards;
        place-self: stretch;

        display: flex;
        flex-direction: column;
        gap: 2rem;
    }


    footer{
        display: grid;
        grid-template-areas: 
            "logo"
            "nav"
            "socials"
            "copyright";
        justify-items: center;

        color: var(--White);
        background: var(--Black);
        padding: 2rem;
    }

    footer > * {
        padding: 1.5rem 0;
    }

    .logo {
        grid-area: logo;
        width: 10rem;
    }
    .botnav {
        grid-area: nav;
    }
    .nav-links {
        list-style: none;
        text-align: center;
        display: flex;
        flex-flow: column;
        gap: 1.5rem;
    }
    .socials {
        grid-area: socials;
        display: flex;
        gap: 1rem;
        padding-bottom: 0;
    }
    .copyright {
        grid-area: copyright;
        text-align: center;
        color: var(--Dark-Gray);
        padding-top: 0;
    }    
    .attribution {
        font-size: .7rem;
    }

    @media screen and (min-width:700px) {
        main {
            padding: 5rem var(--sides-desktop);
            width: fit-content;

            /* margin: 2rem 0; */
        }

        .about-grid {
            padding: 5rem 0;

            grid-template-rows: 1fr 1fr 1fr;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        }
        .about-grid img {
            grid-row: 1/4;
            grid-column: 1/5;
        }
        .about-text {
            grid-row: 2/4;
            grid-column: 4/7;

            place-content: stretch;
            place-items: end;
            padding: 5vw 0 0 7.5vw;
            text-align: left;
        }
        .about-text h1{
            font-size: 3.4vw;
        }

        .creation-grid {
            grid-template-areas:
                "title button"
                "cards cards";
        }
        .creation-grid h1 {
            place-self: center start;
        }
        .creation-grid button {
            place-self: center end;
        }
        .cards {
            /* flex-flow: row wrap;
            gap: 1rem; */
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            /* place-content: center; */
            padding: 0 0 5rem 0;

        }

        footer {
            grid-template-areas: 
            "logo socials"
            "nav copyright";
            padding: 2rem var(--sides-desktop);
            row-gap: 1rem;
        }
        footer > * {
            padding: 0;
        }
        .logo {
            justify-self: start;
        }
        .botnav {
            justify-self: start;
        }
        .socials {
            justify-self: end;
        }        

        .copyright {
            justify-self: end;
            padding: 0;
        }
        .nav-links {
            flex-flow: row;
            gap: 2rem;
        }
    }
</style>