
<script>
	let count = 0;
    console.log(`Svelte rendering`);
</script>

<button on:click={() => count -= 1}>-</button>
<span>{ count }</span>
<button on:click={() => count += 1}>+</button>