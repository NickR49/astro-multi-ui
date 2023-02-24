
<script lang="ts">
    export let label: string
    export let onClick: () => void
</script>

<button class="rounded-full bg-white w-8" on:click={onClick}>{ label}</button>
 