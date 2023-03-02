
<script lang="ts">
    export let label: string
    export let onClick: () => void
</script>

<button class="btn-xs rounded-full bg-white w-8 border border-slate-600" on:click={onClick}>{ label}</button>
 