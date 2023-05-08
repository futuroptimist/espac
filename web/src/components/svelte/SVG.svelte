<script>
    export let d, inverted = false;
</script>

    <svg xmlns="http://www.w3.org/2000/svg">
        <path class="icon" inverted={inverted && "inver"} d={d} />
    </svg>

<style>
   .icon {
        fill: #141414;
        transform: scale(0.05);
    }

    svg {
        width: 30px;
        height: 30px;
        margin-left: 10px;
        margin-top: 5px;
    }
</style>
