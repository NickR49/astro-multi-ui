
<script>
    import Button from "./Button.svelte";
	let count = 0;
</script>

<div class="flex flex-row gap-6 items-center">
    <Button label="-" onClick={() => count -= 1}  />
        <div class="w-12 text-center">{ count }</div>
    <Button label="+" onClick={() => count += 1}  />
</div>
