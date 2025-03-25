<script lang="ts">
    import { Canvas } from "@threlte/core";
    import Model from "./Model.svelte";
</script>

<div
    class=" w-[400px] h-[450px] lg:w-[500px] lg:h-[500px] rounded-md overflow-hidden"
>
    <Canvas>
        <Model />
    </Canvas>
</div>
