<script>
    import Logo from './Logo.svelte';
    import Menu from './Menu.svelte';
    import Bio from './Bio.svelte';
    import { onMount } from 'svelte';

    let mounted = false;

    onMount(() => {
        mounted = true;
    });
</script>

{#if mounted}
    <div class="horizontal">
        <div class="vertical">
            <div class="horizontal header">
                <Logo />
                <Bio />
            </div>
            <Menu />
            <slot />
        </div>
    </div>
{/if}


<style>
    :root {
        background-color: #141414;
    }
    
    .horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .vertical {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .header {
        margin-bottom: 20px;
    }
</style>