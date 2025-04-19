<script lang="ts">
  import { fly } from "svelte/transition";
  import { navigate } from "astro:transitions/client";
  import { input } from "../filterComp/state";

  let showMenu = $state(false);
  let isNavigating = $state(false);
  let url: { href: string; title: string }[] = [
    { href: "/", title: "home" },
    { href: "/about", title: "about" },
    { href: "/project", title: "project" },
    { href: "/blog", title: "blog" },
  ];

  async function navigating(url: string) {
    isNavigating = true; // Aktifkan animasi sebelum navigasi
    showMenu = false;

    navigate(url); // Navigasi setelah animasi selesai
  }
</script>

<header
  class="w-full h-[90px] bg-dark-grey flex justify-between items-center px-4 md:px-10"
>
  <img class=" w-[70px] h-auto rounded-full" src="/favicon.png" alt="logo" />

  <!-- Tombol Hamburger di Mobile -->
  <button
    class="block md:hidden text-white text-3xl cursor-pointer"
    aria-label="Toggle menu"
    onclick={() => (showMenu = !showMenu)}
  >
    <i class="fa-solid {!showMenu ? 'fa-bars' : 'fa-xmark'}"></i>
  </button>

  <!-- Navbar untuk layar besar -->
  <nav class="hidden md:flex gap-5">
    <ul class="flex items-center justify-start gap-4 text-2xl text-white">
      {#each url as { href, title }}
        {#if href != window.location.pathname}
          <li><a {href}>{title}</a></li>
        {:else}
          <li>
            <span class="cursor-pointer text-light-grey">
              {title}
            </span>
          </li>
        {/if}
      {/each}
    </ul>
    <ul class="flex items-center text-3xl text-white">
      <li>
        <a href="https://github.com/wanto-production" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </li>
    </ul>
  </nav>

  <!-- Navbar untuk layar kecil -->
  {#if showMenu}
    <nav
      class=" z-20 absolute top-20 left-0 w-full bg-dark-grey p-5 flex flex-col items-center gap-3 text-white md:hidden"
      transition:fly={{ y: -10, duration: 300 }}
    >
      {#each url as { href, title }}
        {#if href != window.location.pathname}
          <button class="text-xl" onclick={() => navigating(href)}>
            {title}
          </button>
        {:else}
          <span class="text-lg">{title}</span>
        {/if}
      {/each}

      <a
        href="https://github.com/wanto-production"
        aria-label="GitHub"
        class="text-3xl"
      >
        <i class="fa-brands fa-github"></i>
      </a>
    </nav>
  {/if}
</header>
