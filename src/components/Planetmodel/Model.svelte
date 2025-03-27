<script lang="ts">
  import { T, useTask } from "@threlte/core";
  import { useGltf } from "@threlte/extras";
  import { speed, size } from "./state";

  let rotateY = $state(0);

  useTask((delta) => {
    rotateY += delta * $speed;
  });
</script>

{#await useGltf(import.meta.env.PUBLIC_GLB_URL) then model}
  <T is={model.scene} scale={$size} rotation.x={0.4} rotation.y={rotateY} />
{/await}
