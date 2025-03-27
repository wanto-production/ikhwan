<script lang="ts">
  import { T, useTask } from "@threlte/core";
  //@ts-ignore
  import { useGltf } from "@threlte/extras";
  import { speed, size } from "./state";
  import { Skeleton } from "../ui/skeleton.tsx";

  let { children } = $props();
  let rotateY = $state(0);

  useTask((delta) => {
    rotateY += delta * $speed;
  });
</script>

{#await useGltf(import.meta.env.PUBLIC_GLB_URL)}
  <div
    class=" w-[400px] h-[400px] bg-light-grey rounded-md grid place-content-center"
  >
    <h2 class="text-black">wait 3D model loading...</h2>
  </div>
{:then model}
  <T is={model.scene} scale={$size} rotation.x={0.4} rotation.y={rotateY} />
{/await}
