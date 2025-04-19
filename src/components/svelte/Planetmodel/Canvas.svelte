<script lang="ts">
  import { Canvas } from "@threlte/core";
  import Model from "./Model.svelte";
</script>

<svelte:boundary>
  <div
    class=" w-[300px] h-[300px] bg-[#0c0c0c] lg:w-[500px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
  >
    <Canvas>
      <Model />
    </Canvas>
  </div>
  {#snippet failed()}
    <h2>somthing wrong</h2>
  {/snippet}
</svelte:boundary>
