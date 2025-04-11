<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
</script>

<div
  class=" shadow-lg w-[300px] h-auto lg:w-[500px] bg-black lg:h-[500px] rounded-md overflow-hidden"
>
  <Canvas>
    <T.PerspectiveCamera makeDefault position={[70, 20, -40]}>
      <OrbitControls />
    </T.PerspectiveCamera>
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
