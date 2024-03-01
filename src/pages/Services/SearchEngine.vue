<template>
    <div>
        <SeoBanner />
        <AboutSeo />

    </div>
</template>

<script>

import SeoBanner from '@/components/Services/Seo/SeoBanner.vue';
import AboutSeo from '@/components/Services/Seo/AboutSeo.vue';

  export default {
    components: {
        SeoBanner, AboutSeo
    }
  }
</script>