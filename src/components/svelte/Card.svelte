
<script lang="ts">
    console.log(`Svelte rendering`);
</script>

<div class="flex flex-col bg-blue-300 rounded-md border-gray-800 border-2 shadow-gray-500 shadow-lg p-2 m-1">
    <h2>Svelte</h2>
    <div>
        <slot></slot>
    </div>
</div>
