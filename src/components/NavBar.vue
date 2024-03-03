<template>
<section :class="{ 'nav-dark-background': isNavbarSolid, 'transparent-background': !isNavbarSolid }"
      class="fixed top-0 left-0 w-full z-10 transition-all duration-300" >
  <nav class="flex items-center justify-between px-8 py-5">
    <div class="w-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-auto mr-14">
          <a href="/">
            <img width="160" src="../assets/full-logo.png" alt="cybercreative" />
          </a>
        </div>
      </div>
    </div>
    <div class="w-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-auto hidden lg:block">
          <ul class="flex items-center mr-10">
            <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg"><a href="/">Home</a></li>
              <li class="relative group">
              <div class="font-heading mr-9 text-white hover:text-gray-200 text-lg cursor-pointer">
                <div @click="toggleDropdown($event)" class="flex items-center text-white hover:text-gray-200 text-lg cursor-pointer">
    <div class="font-heading mr-2">Services</div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      class="w-6 h-6 transform transition-transform"
      :class="{ 'rotate-180': isDropdownOpen }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>

              </div>
              <!-- Dropdown Content -->
              <ul v-if="isDropdownOpen" :style="{ top: this.dropdownTop + 'px' }" class="fixed z-50 mt-2 bg-black text-gray-300 border rounded-md shadow-lg">
                <li><a href="/services/webdevelopment" class="block px-4 py-2 text-sm">Web Development</a></li>
                <li><a href="/services/webdesign" class="block px-4 py-2 text-sm">Web Design</a></li>
                <li><a href="/services/seo" class="block px-4 py-2 text-sm">SEO</a></li>
              </ul>
            </li>
            <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg"><a href="/contactus">Contact</a></li>
          </ul>
        </div>
        <div class="w-auto lg:hidden">
          <a href="#" @click="toggleMenu">
            <svg class="navbar-burger text-gray-800" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="currentColor"></rect>
              <path v-if="!isMenuOpen" d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          </a>

        </div>
      </div>
    </div>
  </nav>
  <div class="navbar-menu fixed top-0 right-0 bottom-0 w-4/6 sm:max-w-md" v-if="isMenuOpen" >
    <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav class="burger-menu relative z-10 px-9 py-8 bg-gray-900 h-full" :class="{ opened: isMenuOpen, closed: !isMenuOpen }">
      <div class="flex flex-wrap justify-between h-full">
        <div class="w-full">
          <div class="flex items-center justify-between -m-2">
            <a href="#" class="fixed top-10 right-0" @click="toggleMenu">           
            <svg class="navbar-burger text-gray-800" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">            <path v-if="isMenuOpen" d="M18 6L6 18M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
          </div>
        </div>
        <div class="flex flex-col justify-center py-8 w-full">
          <ul class="burger-links" :class="{ opened: isMenuOpen, closed: !isMenuOpen }">
            <li class="mb-12"><a class="font-heading font-medium text-lg text-white hover:text-gray-200" href="#">Features</a></li>
            <li class="mb-12"><a class="font-heading font-medium text-lg text-white hover:text-gray-200" href="#">Solutions</a></li>
            <li class="mb-12"><a class="font-heading font-medium text-lg text-white hover:text-gray-200" href="#">Resources</a></li>
            <li><a class="font-heading font-medium text-lg text-white hover:text-gray-200" href="#">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      isDropdownOpen: false,
      dropdownTop: 0,
      isNavbarSolid: false,
      isMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.isMenuOpen)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleDropdown(event) {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.dropdownTop = event.target.getBoundingClientRect().bottom;
    },
    handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      this.isNavbarSolid = scrollY > 50; // Adjust the threshold as needed
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen

    }
  },
}
</script>


<style>
.nav-dark-background {
  background-color: #0E0F11;
}

.transparent-background {
  background-color: transparent;
}

.rotate-180 {
  transform: rotate(180deg);
}

.transition-transform {
  transition: transform 0.3s ease;
}


.burger-links, .burger-menu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  animation: slideDown 1s ease-in-out;
}

.burger-links.opened, .burger-menu.opened {
  max-height: 400px; /* Just ett exempelvärde, ändra efter behov */
  opacity: 1;
}

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 400px; /* Samma värde som .burger-links.opened */
    opacity: 1;
  }
}


@media (min-width: 1024px) {
  .navbar-menu {
    display: none;
  }
}
</style>