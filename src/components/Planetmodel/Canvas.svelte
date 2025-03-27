<script lang="ts">
  import { Canvas } from "@threlte/core";
</script>

<div
  class=" w-[400px] h-[450px] lg:w-[500px] lg:h-[500px] rounded-md overflow-hidden"
>
  <Canvas>
    {#await import("./Model.svelte")}
      <div
        class=" w-full h-full bg-light-grey rounded-md grid place-content-center"
      >
        <h2 class="text-black">wait 3D model loading...</h2>
      </div>
    {:then { default: Model }}
      <Model />
    {/await}
  </Canvas>
</div>
