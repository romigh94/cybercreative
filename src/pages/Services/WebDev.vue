<template>
    <div>
        <WebDevBanner />
        <AboutWebDev />

    </div>
</template>

<script>

import WebDevBanner from '@/components/Services/WebDev/WebDevBanner.vue';
import AboutWebDev from '@/components/Services/WebDev/AboutWebDev.vue';

  export default {
    components: {
        WebDevBanner, AboutWebDev
    }
  }
</script>