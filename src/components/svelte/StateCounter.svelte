
<script>
    import Button from "./Button.svelte";
    import { counter } from "../../counterStore";
</script>

<div class="flex flex-row gap-6 items-center">
    <Button label="-" onClick={() => counter.set($counter - 1)}  />
        <div class="w-12 text-center">{ $counter }</div>
    <Button label="+" onClick={() => counter.set($counter + 1)}  />
</div>
