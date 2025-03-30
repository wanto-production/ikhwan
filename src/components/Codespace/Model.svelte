<script lang="ts">
  import { T } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import { PUBLIC_GLB_URL } from "astro:env/client";
</script>

{#await useGltf(PUBLIC_GLB_URL + "/codespace.glb")}
  <div
    class=" w-full h-full bg-light-grey rounded-md grid place-content-center"
  >
    <h2 class="text-black">wait 3D model loading...</h2>
  </div>
{:then { scene }}
  <T is={scene} position.y={25} scale={2} />
{/await}
