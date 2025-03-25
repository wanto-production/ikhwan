<script lang="ts">
    import Typewriter, { loop } from "svelte-typewriter";
</script>

<svelte:boundary>
    <p
        class=" text-2xl font-[Poppins,sans-serif] font-[500]"
        use:loop={{ interval: 150 }}
    >
        hello world!
    </p>

    {#snippet failed(error)}
        <p>error: {error}</p>
    {/snippet}
</svelte:boundary>
