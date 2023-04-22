<script>
    import Chip from './Chip.svelte';

    const menuItems = [
        {
            "text": "Home",
            "href": "/"
        },
        {
            "text": "Projects",
            "href": "/projects"
        },
        {
            "text": "About",
            "href": "/about"
        },
        {
            "text": "Contact",
            "href": "/contact"
        },
        {
            "text": "Links",
            "href": "/links"
        }
    ];
</script>

<div class="horizontal">
    {#each menuItems as menuItem}
        <Chip text={menuItem.text} href={menuItem.href} large={true} />
    {/each}
</div>

<style>
    .horizontal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>