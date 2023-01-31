<script>
    export let text = ''
    export let img
    // export let alt = ''
    export let mode
    let h
    let w
    </script>
    
    <div bind:clientWidth={w} bind:clientHeight={h} class="card">
        <img src="./img/{mode}/{img}" alt="">
        <a href="/" class="text-overlay">
            <p class="card-text">{@html text}</p>
        </a>
    </div>
    
    <style>
    .card {
        position: relative;
        color: var(--White);
        /* width: 85vw; */
        margin: 0 auto;
    }
    
    .card img {
        width: 100%;
        height: 100%;
    }
    
    .text-overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.63));
    }
    .text-overlay:hover, .text-overlay:focus {
        background: rgba(255, 255, 255, 0.705);
        cursor: pointer;
    }
    
    .card-text {
        position: absolute;
        margin: 0;
        left: 5%;
        bottom: 15%;
        text-align: left;
        font-family: 'Josefin Sans';
        font-weight: 300;
        font-size: 6vw;
        line-height: 6vw;
        color: var(--White);
    }
    .text-overlay:hover > p {
        color: var(--Black);
    }
    
    @media screen and (min-width:700px) {
        .card {
            /* width: 18vw;
            height: 31vw; */
    
            width: 100%;
            /* height: 31vw; */
        }
    
        .text-overlay {
            background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.63));
        }
        .text-overlay:hover, .text-overlay:focus {
        background: rgba(255, 255, 255, 0.705);
        color: var(--Black);
    }

        .card-text {
            left: 15%;
            bottom: 8%;
            font-size: 2.5vw;
            line-height: 2.5vw;
    
            /* font-size: calc(.5rem + 1.8vw); */
        }
    }
    </style>