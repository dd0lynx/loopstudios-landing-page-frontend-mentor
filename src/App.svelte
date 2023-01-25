<script>
    import logo from './assets/logo.svg'
    import facebook from './assets/icon-facebook.svg'
    import instagram from './assets/icon-instagram.svg'
    import pinterest from './assets/icon-pinterest.svg'
    import twitter from './assets/icon-twitter.svg'

    import HeroComponent from './lib/HeroHeader.svelte'

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

</main>

<footer>

</footer>

<style>
    header {
        position: relative;
    }

    @media screen and (min-width:700px) {

    }
</style>