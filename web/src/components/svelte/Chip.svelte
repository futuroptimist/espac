<!-- Chip.svelte -->
<script>
    export let text = '', href, large = false, small = false, inverted = false;
</script>

{#if href !== undefined}
    <a href={href}>
        <span class={large ? 'chip large' : 'chip'}>
            <span class={small ? 'small' : ''}>
                <span class={inverted ? 'inverted' : ''}>
                    {text}
                    <slot />
                </span>
            </span>
        </span>
    </a>
{:else}
    <span class={large ? 'chip large' : 'chip'}>
        <span class={small ? 'small' : ''}>
            <span class={inverted ? 'inverted' : ''}>
                {text}
                <slot />
            </span>
        </span>
    </span>
{/if}

<style>
    .chip {
        background-color: #00ff40;
        color: black;
        border-radius: 20px;
        padding: 4px 8px;
        margin: 4px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.3rem;
        display: inline-flex;
        align-items: center;
        opacity: 0.8;
    }

    .chip:hover {
        opacity: 1;
    }

    .large {
        font-size: 3rem;
    }

    .small {
        font-size: 1.1rem;
    }

    /* .small mobile */
    @media only screen and (max-width: 600px) {
        .small {
            font-size: 0.7rem;
        }
    }

    .inverted {
        background-color: #141414;
        color: #00ff40;

    }
</style>
