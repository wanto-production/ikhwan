<script lang="ts">
  // Daftar credit dalam array
  const credits = [
    {
      title: "Stylized planet",
      author: "cmzw",
      url: "https://skfb.ly/oyDUw",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/4.0/",
    },
    {
      title: "Galaxy of Coder !",
      author: "rohitrawal506 ",
      url: "https://skfb.ly/oZFHZ",
      license: "Creative Commons Attribution",
      licenseUrl: "http://creativecommons.org/licenses/by/3.0/",
    },
  ];
</script>

<footer class="w-full bg-light-grey py-6 flex flex-col items-center">
  <!-- Tombol Scroll ke Atas -->
  <a
    href="#top"
    class="text-gray-300 text-3xl duration-200 hover:scale-110"
    aria-label="icon up"
  >
    <i class="fa-solid fa-chevron-up"></i>
  </a>

  <!-- Copyright -->
  <p class="mt-3 text-gray-300 text-lg font-poppins font-bold">
    {new Date().getFullYear()} &copy; Ikhwan Satrio
  </p>

  <!-- Daftar Credit -->
  <div class="mt-2 text-center text-gray-300 text-sm">
    <p class="font-semibold">Credits:</p>
    <ul class="flex flex-col items-center gap-2 mt-1">
      {#each credits as credit}
        <li>
          <a
            href={credit.url}
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            "{credit.title}" by {credit.author}
          </a>
          is licensed under
          <a
            href={credit.licenseUrl}
            target="_blank"
            class="text-blue-400 hover:underline"
          >
            {credit.license}
          </a>.
        </li>
      {/each}
    </ul>
  </div>
</footer>
