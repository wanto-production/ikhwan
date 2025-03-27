<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
</script>

<div
  class=" w-[400px] h-[450px] lg:w-[500px] bg-black lg:h-[500px] rounded-md overflow-hidden"
>
  <Canvas>
    <T.PerspectiveCamera
      makeDefault
      position={[70, 20, -40]}
      oncreate={(ref) => {
        ref.lookAt(-20, -40, 10);
      }}
    >
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
