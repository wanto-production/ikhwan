<script lang="ts">
  import { T } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
</script>

{#await useGltf(import.meta.env.PUBLIC_GLB_URL + "/codespace.glb")}
  <div
    class=" w-full h-full bg-light-grey rounded-md grid place-content-center"
  >
    <h2 class="text-black">wait 3D model loading...</h2>
  </div>
{:then $model}
  <T is={$model.scene} scale={2} />
{/await}
