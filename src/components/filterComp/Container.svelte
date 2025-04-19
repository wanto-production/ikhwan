<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import { input } from "./state";

  let { blogs }: { blogs: CollectionEntry<"blog">[] } = $props();

  let sortedBlogs = $derived.by(() =>
    blogs.filter(({ data }) =>
      $input.select.toLowerCase() === "all"
        ? data.title.toLowerCase().includes($input.text.toLowerCase())
        : data.category.toLowerCase().includes($input.select.toLowerCase()) &&
          data.title.toLowerCase().includes($input.text.toLowerCase()),
    ),
  );
</script>

{#each sortedBlogs as blog}
  <a href={`/blog/${blog.id.replaceAll(".md", "")}`}>
    <article
      class=" w-[350px] max-[442px]:w-full flex-1 h-[370px] bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      {#if blog.data.thumbnail}
        <img
          src={blog.data.thumbnail}
          alt={blog.data.title}
          class=" h-40 w-full object-cover object-top"
        />
      {:else}
        <div class=" w-full h-40 bg-gray-300 grid place-content-center">
          <h2 class=" text-sm text-white font-thin font-poppins">
            {blog.data.title}
          </h2>
        </div>
      {/if}
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{blog.data.title}</h2>
        <p class="text-sm text-gray-600">{blog.data.description}</p>
        <p class="text-xs text-gray-400 mt-2">{blog.data.date}</p>
        <p class="text-xs text-gray-400 mt-2">category: {blog.data.category}</p>
      </div>
    </article>
  </a>
{/each}
