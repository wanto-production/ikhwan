<script lang="ts">
  import { useGltf } from "@threlte/extras";
  import { T, useTask } from "@threlte/core";
  import { PUBLIC_GLB_URL } from "astro:env/client";
  import { size, speed } from "./state";

  let rotateY = $state(0);

  useTask((delta) => {
    rotateY += delta * $speed;
  });
</script>

{#await useGltf(`${PUBLIC_GLB_URL}/planet.glb`)}
  <div class="w-full h-full bg-light-grey rounded-md grid place-content-center">
    <h2 class="text-black">wait 3D model loading...</h2>
  </div>
{:then model}
  <T is={model.scene} scale={$size} rotation.x={0.4} rotation.y={rotateY} />
{:catch}
  <h2 class="mx-auto my-auto text-white">
    sorry can't load 3D assets, we have trouble
  </h2>
{/await}
